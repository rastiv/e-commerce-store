import "i18next";

declare global {
  type ApiResponse<T> = {
    status: "success" | "error";
    message: string;
    code: string;
    data: T;
  };
}

export {};
