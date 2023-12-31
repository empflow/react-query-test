import fillArr from "@/utils/fillArr";

export default function PostContentSkeleton() {
  const linesAmount = 4;
  return (
    <div className="flex flex-col gap-1">
      {fillArr(linesAmount).map((item, i) => (
        <p key={i} className="bg-gray-200 rounded h-[1rem]"></p>
      ))}
    </div>
  );
}
