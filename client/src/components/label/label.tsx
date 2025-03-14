import { css, cx } from '~/styled-system/css'

interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label: string
}

function Label({ children, label, className, ...rest }: ILabelProps) {
  return (
    <label
      className={cx(
        className,
        css({ display: 'flex', flexDirection: 'column', gap: 2 })
      )}
      {...rest}
    >
      <span
        className={css({
          color: 'gray.800',
          fontSize: 'sm',
          fontWeight: 'bold'
        })}
      >
        {label}
      </span>
      {children}
    </label>
  )
}

export default Label
