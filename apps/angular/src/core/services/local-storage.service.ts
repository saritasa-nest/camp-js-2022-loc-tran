/* eslint-disable require-await */
// I disabled require await for local storage functions for easier code refactoring in the future.
import { Injectable } from '@angular/core';

/** Local storage service. */
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {

  /**
   * Store item to local storage.
   * @param key Key of value in local storage.
   * @param item Item to store in local storage.
   */
  public async setItem<T>(key: string, item: T): Promise<void> {
    localStorage.setItem(key, JSON.stringify(item));
  }

  /**
   * Get item from local storage.
   * @param key Key of value in local storage.
   */
  public async getItem<T = unknown>(key: string): Promise<T | null> {
    const data = localStorage.getItem(key);
    if (data === null) {
      return null;
    }
    return JSON.parse(data) as T;
  }

  /**
   * Remove item from local storage by key.
   * @param key Key of value in local storage.
   */
  public async removeItem(key: string): Promise<void> {
    localStorage.removeItem(key);
  }
}
