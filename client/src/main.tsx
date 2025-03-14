// components
import { ProtectedRoute, RedirectIfAuthenticated } from './components'
import RoutesList from './constants/routes'
import './index.css'
import { queryClient } from './libs/react-query'
import { HomeSkeleton } from './pages/home/components'
import LoginSkeleton from './pages/login/login-skeleton'
import { AuthProvider } from './providers/auth-provider'
// utils
import { css } from './styled-system/css'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

const LazyHomePage = lazy(() => import('./pages/home/home'))
const LazyLoginPage = lazy(() => import('./pages/login/login'))

const $root = document.getElementById('root')!
const root = createRoot($root)

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <div className={css({ maxW: '500px', mx: 'auto' })}>
          <BrowserRouter>
            <Routes>
              <Route
                path={RoutesList.HOME}
                element={
                  <Suspense fallback={<HomeSkeleton />}>
                    <ProtectedRoute element={<LazyHomePage />} />
                  </Suspense>
                }
              />

              <Route
                path={RoutesList.LOGIN}
                element={
                  <Suspense fallback={<LoginSkeleton />}>
                    <RedirectIfAuthenticated element={<LazyLoginPage />} />
                  </Suspense>
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
)
