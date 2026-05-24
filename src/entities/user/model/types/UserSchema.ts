export type User = {
  id: string;
  email: string;
  name: string;
  age: number;
  gender: string;
  role: string;
  emailVerified: boolean;
  twofactorEnabled: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UserShema = {
  userData?: User;
  isLoading: boolean;
  error?: string;
};
