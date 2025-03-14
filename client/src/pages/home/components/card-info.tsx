import { Card } from '~/components'
import { css, cx } from '~/styled-system/css'

interface ICardInfoProps {
  editMode: boolean
  editable: boolean
  name: string
  defaultValue: string | number
  label: string
  displayValue: string | number
  className?: string
  disabled?: boolean
}

function CardInfo({
  editMode,
  editable,
  name,
  defaultValue,
  label,
  displayValue,
  className,
  disabled
}: ICardInfoProps) {
  return (
    <Card className={cx(className, css({ opacity: disabled ? 0.5 : 1 }))}>
      <div
        className={css({ display: 'flex', flexDirection: 'column', gap: 2 })}
      >
        <div
          className={css({
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
            alignItems: 'center'
          })}
        >
          <label>{label}: </label>

          {editMode && editable ? (
            <input
              className={css({
                bg: 'white',
                w: 'full',
                px: 2,
                py: 1,
                borderRadius: 4
              })}
              name={name}
              defaultValue={defaultValue}
            />
          ) : (
            <span
              className={css({
                fontWeight: 'semibold',
                textAlign: 'right',
                w: 'full'
              })}
            >
              {displayValue}
            </span>
          )}
        </div>
      </div>
    </Card>
  )
}

export default CardInfo
