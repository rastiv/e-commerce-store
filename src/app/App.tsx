import { useEffect, useState } from "react";

import { $api } from "@/shared/api";
import { setUserData, type AuthData } from "@/features/auth/store/authSlice";

import { useAppDispatch } from "./store";
import { AppRouter } from "./AppRouter";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchUserSession = async () => {
      try {
        const response = await $api.get<AuthData>("/api/auth/get-session");

        console.log("response.data.data", response.data);
        if (response.data) {
          dispatch(setUserData(response.data.user));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserSession();
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <AppRouter />;
}

export default App;
