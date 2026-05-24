import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import ArrowRight from "@/shared/assets/icons/ArrowRight.svg?react";
import { routePaths } from "@/shared/config";
import { useAppDispatch, useCodeTranslation } from "@/shared/libs";
import { Button, FormField, Input, useToast } from "@/shared/ui";

import { loginSchema, type LoginSchema } from "../../model/schemas/login";
import { login } from "../../model/services/login";

import styles from "./LoginForm.module.scss";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { addToast } = useToast();
  const { t } = useTranslation(["validation"]);
  const { tc } = useCodeTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    setIsLoading(true);
    try {
      const result = await dispatch(login(data)).unwrap();
      addToast({
        message: tc(result.code),
        status: "success",
      });
      navigate(routePaths.home);
    } catch (errorKey) {
      addToast({
        message: tc(errorKey),
        status: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="Email"
        error={errors.email?.message && t(errors.email.message)}
      >
        <Input
          type="email"
          placeholder="Enter your email"
          disabled={isLoading}
          {...register("email")}
        />
      </FormField>
      <FormField
        label="Password"
        error={errors.password?.message && t(errors.password.message)}
      >
        <Input
          type="password"
          placeholder="Enter your password"
          disabled={isLoading}
          {...register("password")}
        />
      </FormField>
      <Button
        isLoading={isLoading}
        disabled={isLoading}
        type="submit"
        className={styles.button}
        size="md"
        fullWidth
      >
        Login <ArrowRight />
      </Button>
    </form>
  );
};
