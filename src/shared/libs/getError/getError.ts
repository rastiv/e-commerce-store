import axios, { AxiosError } from "axios";

type AppErrorData = {
  status: string;
  code: string;
  message?: string;
  issues?: AppErrorIssue[];
};

type AppErrorIssue = {
  code: string;
  format: string;
  message: string;
};

export const getError = (error: Error | AxiosError | unknown): string => {
  if (axios.isAxiosError<AppErrorData>(error)) {
    const { data } = error.response!;
    return data.code || data.message || "Something went wrong";
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong";
};
