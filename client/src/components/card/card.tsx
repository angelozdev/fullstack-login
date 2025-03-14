import { cardStyles } from './card.styles'
import { PropsWithChildren } from 'react'
import { cx } from '~/styled-system/css'

type ICardProps = PropsWithChildren<{
  className?: string
}>

function Card({ children, className }: ICardProps) {
  return <div className={cx(cardStyles, className)}>{children}</div>
}

export default Card
