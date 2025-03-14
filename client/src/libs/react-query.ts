import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient()

export const queryKeys = {
  user: {
    me: ['user', 'me']
  }
} as const
