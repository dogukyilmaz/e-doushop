import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { RootState } from "redux/store";

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const { user, isLoading } = useSelector((state: RootState) => state.auth);
  return (
    <Route
      {...rest}
      render={(props: any) =>
        user?.isAuth && !isLoading ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
