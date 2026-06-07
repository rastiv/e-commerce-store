import { useEffect, useState } from "react";

import { $api } from "@/shared/api";
import { setUserData, type AuthData } from "@/features/auth/store/authSlice";

import { useAppDispatch } from "../store";

export const useGetSession = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchUserSession = async () => {
      try {
        const response = await $api.get<AuthData>("/api/auth/get-session");
        if (response.data) {
          dispatch(setUserData(response.data.user));
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserSession();
  }, [dispatch]);

  return { isLoading };
};
