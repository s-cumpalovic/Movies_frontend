export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
}

export interface ILoginResponse {
  status: string;
  access_token: string;
}

export interface IRegisterResponse {
  status: string;
}

export interface ILoginForm {
  onSubmit: (data: IUserLogin) => void;
}


