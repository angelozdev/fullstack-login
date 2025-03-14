import { cva } from '~/styled-system/css'

export const buttonStyles = cva({
  base: {
    w: 'full',
    height: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '1.5rem',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'semibold',
    transition: 'all 0.2s',
    '&:not(:disabled):hover': { boxShadow: 'md' },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5
    }
  },
  variants: {
    variant: {
      primary: {
        bg: 'black',
        '&:not(:disabled):hover': {
          bg: 'black'
        }
      },
      secondary: {
        bg: 'gray.500',
        '&:not(:disabled):hover': {
          bg: 'gray.600'
        }
      },
      danger: {
        bg: 'red.500',
        '&:not(:disabled):hover': {
          bg: 'red.600'
        }
      },
      success: {
        bg: 'green.500',
        '&:not(:disabled):hover': {
          bg: 'green.600'
        }
      },
      warning: {
        bg: 'yellow.500',
        '&:not(:disabled):hover': {
          bg: 'yellow.600'
        }
      }
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})
