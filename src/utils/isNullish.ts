export default function isNullish(
  payload: unknown
): payload is null | undefined {
  return payload === undefined || payload === null;
}
