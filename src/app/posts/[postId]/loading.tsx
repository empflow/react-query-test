import LoadingSpinner from "@/app/components/LoadingSpinner";
import fillArr from "@/utils/fillArr";

export default function Loading() {
  return (
    <div className="flex flex-col gap-[2px]">
      <p className="h-[32px] bg-gray-200 rounded"></p>
      <p className="h-[40px] bg-gray-200 rounded"></p>

      {fillArr(10).map((line, i) => (
        <p key={i} className="h-[0.95rem] bg-gray-200 rounded"></p>
      ))}
    </div>
  );
}
