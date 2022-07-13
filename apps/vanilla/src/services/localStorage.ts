/**
 * Find in local storage and return new value. If not found, return current value.
 * @param localStorageName Key of value in local storage.
 * @param value This value will return if cannot find out other value in local storage.
 */
export function findInLocalStorage(value: string, localStorageName: string): string {
  const storedValue = localStorage.getItem(localStorageName);
  if (storedValue) {
    return storedValue;
  }
  return value;
}
