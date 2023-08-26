import { CSSProperties } from "react";

interface Props {
  parentStyle?: CSSProperties;
  childStyle?: CSSProperties;
  pxSize?: number;
}
export default function LoadingSpinner(props: Props) {
  const { pxSize = 24, childStyle, parentStyle } = props;

  return (
    <div
      className={`relative flex justify-center items-center`}
      style={{ ...parentStyle, width: pxSize, height: pxSize }}
      title="Loading..."
    >
      <div
        style={childStyle}
        className={`absolute top-0 bottom-0 left-0 right-0 border-4 border-t-blue-600  border-gray-300 animate-spin rounded-full`}
      ></div>
    </div>
  );
}
