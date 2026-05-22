import axios from "axios";

export type ZodIssue = {
  path: (string | number)[];
  message: string;
  code: string;
};

export type ApiErrorResponse = {
  status: "error";
  code: string;
  message: string;
  issues?: ZodIssue[];
};

export const getErrorKey = (error: unknown): string => {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    const data = error.response?.data;

    if (data?.issues && data.issues.length > 0) {
      const firstIssue = data.issues[0];
      return `VALIDATION.${firstIssue.path[0]}.${firstIssue.code}`;
    }

    return data?.code || `SERVER_ERROR_${error.response?.status}`;
  }

  return "UNKNOWN_ERROR";
};
