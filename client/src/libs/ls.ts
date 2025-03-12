interface LocalStorageOptions<T> {
  defaultValue: T;
  serialize?: (value: T) => string;
  deserialize?: (value: string) => T;
}

export enum LSKeys {
  LOGGED_USER = "@logged_user",
}

class LocalStorage<T> {
  private key: LSKeys;
  private serialize: (value: T) => string = JSON.stringify;
  private deserialize: (value: string) => T = JSON.parse;

  constructor(key: LSKeys, options?: LocalStorageOptions<T>) {
    const {
      defaultValue,
      serialize = JSON.stringify,
      deserialize = JSON.parse,
    } = options || {};

    if (!localStorage.getItem(key) && defaultValue)
      localStorage.setItem(key, serialize(defaultValue));

    this.key = key;
    this.serialize = serialize;
    this.deserialize = deserialize;
  }

  public get exists(): boolean {
    return !!localStorage.getItem(this.key);
  }

  public get(
    defaultValue: T | null = null,
    onError?: (error: Error) => void
  ): T | null {
    try {
      const value = localStorage.getItem(this.key);
      return value ? this.deserialize(value) : defaultValue;
    } catch (error) {
      onError?.(error as Error);
      return defaultValue;
    }
  }

  public set(value: T, onError?: (error: Error) => void): boolean {
    try {
      localStorage.setItem(this.key, this.serialize(value));
      return true;
    } catch (error) {
      onError?.(error as Error);
      return false;
    }
  }

  public remove(): boolean {
    if (this.exists) {
      localStorage.removeItem(this.key);
      return true;
    }

    return false;
  }

  public setIfNotExists(value: T): boolean {
    if (!this.exists) return this.set(value);
    return false;
  }
}

export default LocalStorage;
