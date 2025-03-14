import { buttonStyles } from './button.styles'
import { cx } from '~/styled-system/css'

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

interface IButtonProps extends NativeButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
}

function Button({
  children,
  className,
  variant,
  type = 'button',
  ...rest
}: IButtonProps) {
  return (
    <button
      className={cx(className, buttonStyles({ variant }))}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
