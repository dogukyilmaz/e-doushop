export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";

export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";

export const USER_LOGOUT = "USER_LOGOUT";

export const USER_PROFILE_REQUEST = "USER_PROFILE_REQUEST";
export const USER_PROFILE_SUCCESS = "USER_PROFILE_SUCCESS";
export const USER_PROFILE_FAIL = "USER_PROFILE_FAIL";

export const USER_PROFILE_UPDATE_REQUEST = "USER_PROFILE_UPDATE_REQUEST";
export const USER_PROFILE_UPDATE_SUCCESS = "USER_PROFILE_UPDATE_SUCCESS";
export const USER_PROFILE_UPDATE_FAIL = "USER_PROFILE_UPDATE_FAIL";

export interface UserState {
  user: User | null;
  isLoading?: boolean;
  error?: any;
}

export interface User {
  email: string;
  firstName?: string;
  lastName?: string;
  password: string;
  isAdmin?: boolean;
  isSeller?: boolean;
  token?: string;
  isAuth?: boolean;
  _id?: string;
}

// User Actions
interface UserLoginRequest {
  type: typeof USER_LOGIN_REQUEST;
  payload?: null;
}

interface UserLoginSuccess {
  type: typeof USER_LOGIN_SUCCESS;
  payload: User;
}

interface UserLoginFail {
  type: typeof USER_LOGIN_FAIL;
  payload: any;
}

interface UserRegisterRequest {
  type: typeof USER_REGISTER_REQUEST;
  payload?: null;
}

interface UserRegisterSuccess {
  type: typeof USER_REGISTER_SUCCESS;
  payload: User;
}

interface UserRegisterFail {
  type: typeof USER_REGISTER_FAIL;
  payload: any;
}

interface UserLogout {
  type: typeof USER_LOGOUT;
  payload?: null;
}

interface UserProfileRequest {
  type: typeof USER_PROFILE_REQUEST;
  payload?: null;
}

interface UserProfileSuccess {
  type: typeof USER_PROFILE_SUCCESS;
  payload: User;
}

interface UserProfileFail {
  type: typeof USER_PROFILE_FAIL;
  payload: any;
}

interface UserProfileUpdateRequest {
  type: typeof USER_PROFILE_UPDATE_REQUEST;
  payload?: null;
}

interface UserProfileUpdateSuccess {
  type: typeof USER_PROFILE_UPDATE_SUCCESS;
  payload: User;
}

interface UserProfileUpdateFail {
  type: typeof USER_PROFILE_UPDATE_FAIL;
  payload: any;
}

// FIXME: maybe seperate operations/actions
export type UserActionTypes =
  | UserLoginRequest
  | UserLoginSuccess
  | UserLoginFail
  | UserRegisterRequest
  | UserRegisterSuccess
  | UserRegisterFail
  | UserLogout
  | UserProfileRequest
  | UserProfileSuccess
  | UserProfileFail
  | UserProfileUpdateRequest
  | UserProfileUpdateSuccess
  | UserProfileUpdateFail;
