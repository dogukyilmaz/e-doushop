import API, { clearAuthToken, setAuthToken } from "utils/api";
import { Dispatch } from "redux";
import * as userTypes from "redux/user/types";
import { AppThunk } from "redux/store";

export const login = (email: string, password: string): AppThunk => async (
  dispatchEvent: Dispatch<userTypes.UserActionTypes>
) => {
  try {
    dispatchEvent({
      type: userTypes.USER_LOGIN_REQUEST,
    });

    const { data } = await API.post("/users/login", { email, password });

    dispatchEvent({
      type: userTypes.USER_LOGIN_SUCCESS,
      payload: data.data,
    });

    setAuthToken(data.data.token);
  } catch (error) {
    dispatchEvent({ type: userTypes.USER_LOGIN_FAIL, payload: error.response?.data });
  }
};

export const logout = (): AppThunk => async (dispatchEvent: Dispatch<userTypes.UserActionTypes>) => {
  clearAuthToken();
  dispatchEvent({
    type: userTypes.USER_LOGOUT,
  });
};

// TODO: token refresh & reloading & loading user
export const getProfile = (): AppThunk => async (dispatchEvent: Dispatch<userTypes.UserActionTypes>) => {
  try {
    dispatchEvent({
      type: userTypes.USER_PROFILE_REQUEST,
    });

    setAuthToken();
    const { data } = await API.get("/users/profile");

    dispatchEvent({
      type: userTypes.USER_PROFILE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatchEvent({ type: userTypes.USER_PROFILE_FAIL, payload: error.response?.data });
  }
};

export const updateProfile = (user: userTypes.User): AppThunk => async (
  dispatchEvent: Dispatch<userTypes.UserActionTypes>
) => {
  try {
    dispatchEvent({
      type: userTypes.USER_PROFILE_UPDATE_REQUEST,
    });

    setAuthToken();
    const { data } = await API.put("/users/profile", user);

    console.log(data, "d");

    dispatchEvent({
      type: userTypes.USER_PROFILE_UPDATE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatchEvent({ type: userTypes.USER_PROFILE_UPDATE_FAIL, payload: error.response?.data });
  }
};

export const register = (firstName: string, lastName: string, email: string, password: string): AppThunk => async (
  dispatchEvent: Dispatch<userTypes.UserActionTypes>
) => {
  try {
    dispatchEvent({
      type: userTypes.USER_REGISTER_REQUEST,
    });

    const { data } = await API.post("/users", { firstName, lastName, email, password });
    dispatchEvent({
      type: userTypes.USER_REGISTER_SUCCESS,
      payload: data.data,
    });

    // dispatchEvent({
    //   type: userTypes.USER_LOGIN_SUCCESS,
    //   payload: data.data,
    // });

    setAuthToken(data.data.token);
  } catch (error) {
    dispatchEvent({ type: userTypes.USER_REGISTER_FAIL, payload: error.response?.data });
  }
};
