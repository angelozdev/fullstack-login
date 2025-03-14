import { ProtectedRoute, RedirectIfAuthenticated } from './components'
import RoutesList from './constants/routes'
import { queryClient } from './libs/react-query'
import { HomeSkeleton } from './pages/home/components'
import { LoginSkeleton } from './pages/login'
import { AuthProvider } from './providers/auth-provider'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { css } from '~/styled-system/css'

const LazyHomePage = lazy(() => import('./pages/home/home'))
const LazyLoginPage = lazy(() => import('./pages/login/login'))

function App() {
  return (
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
  )
}

export default App
