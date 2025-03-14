import {
  circleStyles,
  lineStyles,
  paragraphStyles,
  skeletonStyles
} from './skeleton.styles'
import { cx } from '~/styled-system/css'

interface IParagraphProps {
  lines?: number
}

function Paragraph({ lines = 5 }: IParagraphProps) {
  return (
    <div role="progressbar" className={paragraphStyles}>
      {Array.from({ length: lines }).map((_, index) => (
        <span key={index} className={cx(skeletonStyles, lineStyles)} />
      ))}
    </div>
  )
}

interface ISquareProps {
  size?: number
}

function Square({ size = 100 }: ISquareProps) {
  return (
    <div style={{ width: size, height: size }} className={skeletonStyles} />
  )
}

interface IRectangleProps {
  width?: number | string
  height?: number | string
}

function Rectangle({ width, height = 32 }: IRectangleProps) {
  return <div style={{ width, height }} className={skeletonStyles} />
}

interface ICircleProps {
  size?: number
}

function Circle({ size = 100 }: ICircleProps) {
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={cx(skeletonStyles, circleStyles)}
    />
  )
}

const Skeleton = {
  Paragraph,
  Square,
  Rectangle,
  Circle
}

export default Skeleton
