import type { SubmitEvent } from "react";
import { useNavigate } from "react-router";

import {
  selectLoginEmail,
  selectLoginMethod,
  selectLoginPassword,
  selectLoginPhone,
} from "../../model/selectors";
import { login } from "../../model/services/login";
import { loginActions } from "../../model/slice/loginSlice";

import styles from "./LoginForm.module.scss";

import ArrowRight from "@/shares/assets/icons/ArrowRight.svg?react";
import MailIcon from "@/shares/assets/icons/Mail.svg?react";
import PhoneIcon from "@/shares/assets/icons/Phone.svg?react";
import { AuthMethod, routePaths, type AuthMethodType } from "@/shares/config";
import { useAppDispatch, useAppSelector } from "@/shares/libs";
import { AppIcon, Button, Input, Tabs } from "@/shares/ui";

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const email = useAppSelector(selectLoginEmail);
  const phone = useAppSelector(selectLoginPhone);
  const password = useAppSelector(selectLoginPassword);
  const method = useAppSelector(selectLoginMethod);

  const handleChangeEmail = (value: string) => {
    dispatch(loginActions.setEmail(value));
  };

  const handleChangePhone = (value: string) => {
    dispatch(loginActions.setPhone(value));
  };

  const handleChangePassword = (value: string) => {
    dispatch(loginActions.setPassword(value));
  };

  const handleTabChange = (value: string) => {
    dispatch(loginActions.setMethod(value as AuthMethodType));
    dispatch(loginActions.resetForm());
  };

  const handleSumbit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await dispatch(login({ email, phone, password }));
    if (login.fulfilled.match(result)) {
      navigate(routePaths.home);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSumbit}>
      <Tabs defaultValue={method} onChange={handleTabChange}>
        <Tabs.List>
          <Tabs.Trigger value={AuthMethod.EMAIL}>
            <AppIcon Icon={MailIcon} />
            Email
          </Tabs.Trigger>
          <Tabs.Trigger value={AuthMethod.PHONE}>
            <AppIcon Icon={PhoneIcon} />
            Phone
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value={AuthMethod.EMAIL}>
          <label className={styles.label}>Email</label>
          <Input
            value={email}
            type="email"
            className={styles.input}
            placeholder="Enter your email"
            onChange={handleChangeEmail}
          />
        </Tabs.Content>
        <Tabs.Content value={AuthMethod.PHONE}>
          <label className={styles.label}>Phone</label>
          <Input
            value={phone}
            className={styles.input}
            placeholder="Enter your phone"
            onChange={handleChangePhone}
          />
        </Tabs.Content>
      </Tabs>
      <label className={styles.label}>Password</label>
      <Input
        value={password}
        type="password"
        className={styles.input}
        placeholder="Enter your password"
        onChange={handleChangePassword}
      />
      <Button type="submit" className={styles.button} size="md" fullWidth>
        Login <AppIcon Icon={ArrowRight} />
      </Button>
    </form>
  );
};
