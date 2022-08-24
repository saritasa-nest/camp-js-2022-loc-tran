/* eslint-disable require-await */
/** I used async function here without waiting for future maintainability. */
export namespace StorageService {

  /**
   * Saves value to storage by key.
   * @param key Key of value to store in local storage.
   * @param value Value that needs to be stored.
   */
  export async function save<T>(key: string, value: T): Promise<void> {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Gets item from storage by key.
   * @param key Key of value to store in local storage.
   */
  export async function get<T>(key: string): Promise<T | null> {
    const data = localStorage.getItem(key);
    if (data == null) {
      return null;
    }
    return JSON.parse(data) as T;
  }

  /**
   * Removes value from storage by key.
   * @param key Key of value to store in local storage.
   */
  export async function remove(key: string): Promise<void> {
    localStorage.removeItem(key);
  }
}
