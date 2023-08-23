import ArrowBack from "@icons/arrowBack.svg";
import { useRouter } from "next/navigation";

export default function BackBtn() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center justify-center border rounded border-gray-500 px-2 py-1"
    >
      <ArrowBack width={18} height={18} />
      Back
    </button>
  );
}
