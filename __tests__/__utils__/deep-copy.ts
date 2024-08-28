export function deepCopy<T>(data: T): T {
  return structuredClone(data);
}
