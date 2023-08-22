import loadingSpinner from "@assets/loadingSpinner.gif";

export default function LoadingSpinner() {
  return (
    <div>
      <img src={loadingSpinner.src} alt="Loading..." />
    </div>
  );
}
