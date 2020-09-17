export class LocalStorageService {

  getItem(key: string): string {
    return localStorage.getItem(key);
  }

  setItem(key: string, newValue: string) {
    localStorage.setItem(key, newValue);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
