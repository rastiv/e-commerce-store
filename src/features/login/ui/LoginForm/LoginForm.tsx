import type { SubmitEvent } from "react";
import { useNavigate } from "react-router";

import ArrowRight from "@/shared/assets/icons/ArrowRight.svg?react";
import { routePaths } from "@/shared/config";
import { useAppDispatch, useAppSelector } from "@/shared/libs";
import { AppIcon, Button, Input, useToast } from "@/shared/ui";

import {
  selectLoginEmail,
  selectLoginError,
  selectLoginIsLoading,
  selectLoginPassword,
  selectLoginPhone,
} from "../../model/selectors";
import { login } from "../../model/services/login";
import { loginActions } from "../../model/slice/loginSlice";

import styles from "./LoginForm.module.scss";

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { addToast } = useToast();

  const email = useAppSelector(selectLoginEmail);
  const phone = useAppSelector(selectLoginPhone);
  const password = useAppSelector(selectLoginPassword);
  const isLoading = useAppSelector(selectLoginIsLoading);
  const error = useAppSelector(selectLoginError);

  const handleChangeEmail = (value: string) => {
    dispatch(loginActions.setEmail(value));
  };

  const handleChangePassword = (value: string) => {
    dispatch(loginActions.setPassword(value));
  };

  const handleSumbit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await dispatch(login({ email, phone, password }));
    if (login.fulfilled.match(result)) {
      navigate(routePaths.home);
    } else {
      addToast({
        message: error || "Login failed",
        status: "error",
      });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSumbit}>
      <Input
        label="Email"
        value={email}
        type="email"
        placeholder="Enter your email"
        disabled={isLoading}
        onChange={handleChangeEmail}
      />
      <Input
        label="Password"
        value={password}
        type="password"
        placeholder="Enter your password"
        disabled={isLoading}
        onChange={handleChangePassword}
      />
      <Button
        isLoading={isLoading}
        disabled={isLoading}
        type="submit"
        className={styles.button}
        size="md"
        fullWidth
      >
        Login <AppIcon Icon={ArrowRight} />
      </Button>
    </form>
  );
};
