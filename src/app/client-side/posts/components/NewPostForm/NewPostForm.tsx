import { useForm } from "react-hook-form";
import Input from "./Input";
import Textarea from "./Textarea";
import isAxiosErrWithResp from "@/utils/isAxiosErrWithResp";
import FieldErr from "./FieldErr";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import useAddPostMutation from "@/app/hooks/queries/useAddPostMutation";
import { error } from "console";

interface TFormInputs {
  title: string;
  body: string;
}

export default function NewPostForm() {
  const {
    register,
    formState: { errors: errs },
    reset,
    handleSubmit,
    setError,
  } = useForm<TFormInputs>();
  const { isLoading: isAddingPost, mutateAsync: addPost } =
    useAddPostMutation();

  function setUnknownServerErr() {
    setError("root.serverErr", {
      type: "unknown",
      message: "An unknown error has occured. Try again later",
    });
  }

  async function onFormSubmit(data: TFormInputs) {
    try {
      await addPost(data);
      reset();
    } catch (err) {
      if (!isAxiosErrWithResp(err)) return setUnknownServerErr();

      switch (err.response.data.errCode) {
        case "INVALID_CREDENTIALS":
          return setError("root.serverErr", {
            type: "invalidCredentials",
            message: "Invalid email or password",
          });
        default:
          return setUnknownServerErr();
      }
    }
  }

  return (
    <div className="flex flex-col gap-4 max-w-sm">
      <h2 className="font-semibold text-2xl">Add new post</h2>

      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="flex flex-col gap-3"
      >
        <div className="flex flex-col gap-2">
          <Input
            label="Title"
            register={register("title", { required: "Post title is required" })}
            type="text"
            errMsg={errs.title?.message}
          />
          <Textarea
            label="Body"
            rows={8}
            register={register("body", { required: "Post body is required" })}
            errMsg={errs.body?.message}
          />
        </div>

        <button
          className="px-3 py-1 flex justify-center border rounded border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 duration-200"
          type="submit"
        >
          {isAddingPost ? <LoadingSpinner pxSize={24} /> : "Send"}
        </button>

        <FieldErr content={errs.root?.serverErr.message} />
      </form>
    </div>
  );
}
