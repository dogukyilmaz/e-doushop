import API, { setAuthToken } from "utils/api";
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
    dispatchEvent({ type: userTypes.USER_LOGIN_FAIL, payload: error.response.data });
  }
};
