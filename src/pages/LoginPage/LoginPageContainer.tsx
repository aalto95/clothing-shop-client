import React from "react";
import LoginPage from "./LoginPage";
import { useAppSelector } from "../../app/hooks";

const LoginPageContainer = () => {
  const login = useAppSelector((state) => state.app.login);
  const password = useAppSelector((state) => state.app.password);
  const isLogged = useAppSelector((state) => state.app.isLogged);

  const onFormSubmit = () => {};
  const onLoginChange = () => {};
  const onPasswordChange = () => {};
  return (
    <LoginPage
      onFormSubmit={onFormSubmit}
      onLoginChange={onLoginChange}
      onPasswordChange={onPasswordChange}
      login={login}
      password={password}
      isLogged={isLogged}
    />
  );
};

export default LoginPageContainer;
