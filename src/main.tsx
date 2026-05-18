import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "@/app/i18n/config";

import App from "./app/App.tsx";
import { StoreProvider, ThemeProvider } from "./app/providers";

import "./app/styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </StoreProvider>
  </StrictMode>,
);
