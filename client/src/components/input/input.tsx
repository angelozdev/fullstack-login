import { PropsWithChildren } from 'react'
import { css, cx } from '~/styled-system/css'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rightContent?: React.ReactNode
  leftContent?: React.ReactNode
}

function Content({ children }: PropsWithChildren) {
  return (
    <span
      className={css({
        display: 'flex',
        height: 'full',
        alignItems: 'center',
        justifyContent: 'center'
      })}
    >
      {children}
    </span>
  )
}

function Input({ rightContent, leftContent, disabled, ...rest }: IInputProps) {
  return (
    <div
      className={cx(
        css({
          bg: 'gray.100',
          height: 12,
          display: 'flex',
          alignItems: 'center',
          px: 4,
          gap: 4,
          borderRadius: 'sm',
          '&:focus-within': {
            outline: 'none',
            boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.5)'
          }
        }),
        disabled && css({ bg: 'gray.200', cursor: 'not-allowed', opacity: 0.5 })
      )}
    >
      {leftContent && <Content>{leftContent}</Content>}
      <input
        aria-disabled={disabled}
        disabled={disabled}
        className={css({
          py: 2,
          w: 'full',
          bg: 'transparent',
          h: 'full',
          outline: 'none',
          border: 'none'
        })}
        {...rest}
      />
      {rightContent && <Content>{rightContent}</Content>}
    </div>
  )
}

export default Input
