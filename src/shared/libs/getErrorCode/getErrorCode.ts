import axios from "axios";

export type Issue = {
  path: (string | number)[];
  message: string;
  code: string;
};

export type ApiErrorResponse = {
  status: "error";
  code: string;
  message: string;
  issues?: Issue[];
};

export const getErrorCode = (error: unknown): string => {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    const data = error.response?.data;

    if (data?.issues && data.issues.length > 0) {
      return "INPUT_VALIDATION";
    }

    return data?.code || `SERVER_${error.response?.status}`;
  }

  return "UNKNOWN_ERROR";
};
