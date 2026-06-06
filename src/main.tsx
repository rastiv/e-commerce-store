import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "@/app/i18n/config";

import { ErrorBoundary } from "@/app/ErrorBaundary";
import { StoreProvider } from "@/app/StoreProvider";
import { ThemeProvider } from "@/app/ThemeProvider";
import { ToastProvider } from "@/app/ToastProvider";

import App from "@/app/App.tsx";
import "@/app/styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <StoreProvider>
        <BrowserRouter>
          <ThemeProvider>
            <ToastProvider>
              <App />
            </ToastProvider>
          </ThemeProvider>
        </BrowserRouter>
      </StoreProvider>
    </ErrorBoundary>
  </StrictMode>,
);
