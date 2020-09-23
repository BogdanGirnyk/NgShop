export class LocalStorageService {

  getItem(key: string): string {
    return localStorage.getItem(key);
  }

  // если значение придет не как строка, то его надо к строке преобразовать
  setItem(key: string, newValue: string) {
    localStorage.setItem(key, newValue);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
