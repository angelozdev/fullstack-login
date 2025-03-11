import "./index.css";

import { lazy, StrictMode, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from "react-dom/client";

// components
import { ProtectedRoute } from "./components";

// utils
import { css } from "./styled-system/css";
import RoutesList from "./constants/routes";
import { LoginSkeleton } from "./pages/login";

const HomePage = lazy(() => import("./pages/home/home"));
const LoginPage = lazy(() => import("./pages/login/login"));

const $root = document.getElementById("root")!;

createRoot($root).render(
  <StrictMode>
    <div
      className={css({
        borderRadius: "2xl",
        boxShadow: "sm",
        maxW: "500px",
        mx: "auto",
        my: 8,
        p: 4,
      })}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path={RoutesList.HOME}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ProtectedRoute element={<HomePage />} />
              </Suspense>
            }
          />

          <Route
            path={RoutesList.LOGIN}
            element={
              <Suspense fallback={<LoginSkeleton />}>
                <LoginPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  </StrictMode>
);
