import fillArr from "@/utils/fillArr";
import styles from "@/app/loading.module.css";

export default function Loading() {
  const nameHeight = 28;
  const nameWidth = 160;

  const otherDataHeight = 24;
  const paddingHeight = 8 * 2;

  const height = nameHeight + otherDataHeight + paddingHeight;

  return (
    <div>
      <p></p>
      <h1>Users</h1>

      <div className="flex flex-col gap-2">
        {fillArr(10).map((user, i) => (
          <div
            className={`border border-gray-300 rounded p-2 ${styles.loadingContainer} flex flex-col gap-2`}
            style={{ height: 102 }}
            key={i}
          >
            <h2 className="text-xl rounded font-semibold text-transparent w-[180px]">
              text
            </h2>
            <div className="flex flex-col gap-1">
              <h3 className="text-transparent text-sm rounded w-[150px]">
                text
              </h3>
              <h4 className="text-transparent text-sm rounded w-[150px]">
                text
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
