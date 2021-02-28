import * as userTypes from "redux/user/types";

const initialUser: userTypes.UserState = {
  user: null,
  isLoading: false,
  error: null,
};

// TODO: change structure updating etc
// FIXME: loading issue
export const authReducer = (state = initialUser, action: userTypes.UserActionTypes): userTypes.UserState => {
  const { type, payload } = action;

  switch (type) {
    case userTypes.USER_LOGIN_REQUEST:
    case userTypes.USER_PROFILE_REQUEST:
    case userTypes.USER_REGISTER_REQUEST:
    case userTypes.USER_PROFILE_UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case userTypes.USER_LOGIN_SUCCESS:
    case userTypes.USER_PROFILE_SUCCESS:
    case userTypes.USER_REGISTER_SUCCESS:
    case userTypes.USER_PROFILE_UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: { ...state.user, ...payload, isAuth: true },
      };
    case userTypes.USER_LOGIN_FAIL:
    case userTypes.USER_PROFILE_FAIL:
    case userTypes.USER_REGISTER_FAIL:
    case userTypes.USER_PROFILE_UPDATE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case userTypes.USER_LOGOUT:
      return {
        ...initialUser,
      };
    default:
      return { ...state };
  }
};
