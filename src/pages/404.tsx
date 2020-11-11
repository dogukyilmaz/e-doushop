import React from "react";
import { Link } from "react-router-dom";
import { User } from "redux/user/types";

const NotFound = ({ user }: any) => {
  console.log(user, "s");
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1 style={{ fontSize: 80, letterSpacing: 5, fontWeight: 300 }}>404</h1>
        <h1 style={{ fontSize: 30, letterSpacing: 2, fontWeight: 300 }}>Not Found</h1>
      </div>
      <br />
      <div className="p-mt-5">
        <h2>Ohh, are you lost?</h2>

        {!user?.isAuth && (
          <>
            <p>
              Go to{" "}
              <Link to="/login">
                <strong>Login</strong>
              </Link>
            </p>
            <p>
              Go to{" "}
              <Link to="/register">
                <strong>Register</strong>
              </Link>
            </p>
          </>
        )}
        <p>
          Go to{" "}
          <Link to="/">
            <strong>Mainpage</strong>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
