export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_PROFILE_REQUEST = "USER_PROFILE_REQUEST";
export const USER_PROFILE_SUCCESS = "USER_PROFILE_SUCCESS";
export const USER_PROFILE_FAIL = "USER_PROFILE_FAIL";

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
interface UserRequest {
  type: typeof USER_LOGIN_REQUEST;
  payload?: null;
}

interface UserSuccess {
  type: typeof USER_LOGIN_SUCCESS;
  payload: User;
}

interface UserFail {
  type: typeof USER_LOGIN_FAIL;
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
export type UserActionTypes =
  | UserRequest
  | UserSuccess
  | UserFail
  | UserLogout
  | UserProfileRequest
  | UserProfileSuccess
  | UserProfileFail;
