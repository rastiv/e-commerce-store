import { Suspense } from "react";

import { AppRouter, ErrorBoundary } from "./providers";

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<></>}>
        <AppRouter />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
