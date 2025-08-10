import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import { twMerge } from "tailwind-merge";
import primereactPT from "./theme/primereactPT.js";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PrimeReactProvider
        value={{
          unstyled: true,
          pt: primereactPT,
          ptOptions: {
            mergeSections: true,
            mergeProps: true,
            classNameMergeFunction: twMerge,
          },
        }}
      >
        <App />
      </PrimeReactProvider>
    </BrowserRouter>
  </StrictMode>
);
