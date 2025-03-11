import "./index.css";

import { lazy, StrictMode, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// components
import { ProtectedRoute, RedirectIfAuthenticated } from "./components";

// utils
import { css } from "./styled-system/css";
import RoutesList from "./constants/routes";
import { LoginSkeleton } from "./pages/login";
import { queryClient } from "./libs/react-query";
import { AuthProvider } from "./providers/auth-provider";

const HomePage = lazy(() => import("./pages/home/home"));
const LoginPage = lazy(() => import("./pages/login/login"));

const $root = document.getElementById("root")!;
const root = createRoot($root);

root.render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
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
                    <RedirectIfAuthenticated element={<LoginPage />} />
                  </Suspense>
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
