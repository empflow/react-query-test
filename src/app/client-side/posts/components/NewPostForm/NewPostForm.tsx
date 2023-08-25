import { FieldErrors, FieldValues, useForm } from "react-hook-form";
import Label from "./Label";
import Input from "./Input";
import FieldErr from "./FieldErr";

interface TForm {
  title: string;
  body: string;
  email: string;
  confirmEmail: string;
}

export default function NewPostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors: errs },
    reset,
    getValues,
  } = useForm<TForm>({ mode: "onBlur" });

  function checkEmailsMatch(confirmationEmail: string) {
    if (getValues("email") !== confirmationEmail) {
      return "Emails must match";
    }
  }

  function onFormSubmit(data: FieldValues) {
    console.info(data);
  }

  function onFormErr(errs: FieldErrors<TForm>) {}

  console.log(errs);

  return (
    <div>
      <h2>Add new post</h2>

      <form
        className="max-w-sm flex flex-col gap-1"
        onSubmit={handleSubmit(onFormSubmit, onFormErr)}
      >
        <Label>
          Title
          <Input
            type="text"
            register={register("title", { required: "Title is required" })}
          />
          {errs.title && <FieldErr content={errs.title.message} />}
        </Label>

        <Label>
          Body
          <Input
            type="text"
            register={register("body", { required: "Post body is requried" })}
          />
          {errs.body && <FieldErr content={errs.body.message} />}
        </Label>

        <Label>
          Email
          <Input
            type=""
            register={register("email", {
              required: "Email is required",
              pattern: /.+@.+\..+/,
            })}
          />
          {errs.email && <FieldErr content={errs.email.message} />}
        </Label>

        <Label>
          Confirm email haha
          <Input
            type=""
            register={register("confirmEmail", {
              required: "Email confirmation is required",
              validate: checkEmailsMatch,
            })}
          />
          {errs.confirmEmail && (
            <FieldErr content={errs.confirmEmail.message} />
          )}
        </Label>

        <button
          className="border border-blue-600 hover:text-white hover:bg-blue-600 duration-200 rounded p-2"
          type="submit"
        >
          Add post
        </button>
      </form>
    </div>
  );
}
