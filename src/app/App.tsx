import { Suspense, useEffect } from "react";

import { initUserData, selectIsUserLoading } from "@/entities/user";

import { useAppDispatch, useAppSelector } from "@/shared/libs";

import { AppRouter, ErrorBoundary } from "./providers";

function App() {
  const appDispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsUserLoading);

  useEffect(() => {
    appDispatch(initUserData());
  }, [appDispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<></>}>
        <AppRouter />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
