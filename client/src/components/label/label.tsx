import { labelStyles, textStyles } from './label.styles'
import { cx } from '~/styled-system/css'

type NativeLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

interface ILabelProps extends NativeLabelProps {
  label: string
}

function Label({ children, label, className, ...rest }: ILabelProps) {
  return (
    <label className={cx(className, labelStyles)} {...rest}>
      <span className={textStyles}>{label}</span>
      {children}
    </label>
  )
}

export default Label
