export class User {
  private _username: string;
  private _logged: boolean;
  private _token: string;

  constructor(username: string, isLoggedIn: boolean, token: string) {
    this._username = username;
    this._logged = isLoggedIn;
    this._token = token;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get isLoggedIn(): boolean {
    return this._logged;
  }

  set isLoggedIn(value: boolean) {
    this._logged = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }
}
