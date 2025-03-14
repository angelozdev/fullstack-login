import { css } from '~/styled-system/css'
import { flex } from '~/styled-system/patterns'

export const labelStyles = flex({
  display: 'flex',
  flexDirection: 'column',
  gap: 2
})

export const textStyles = css({
  color: 'gray.800',
  fontSize: 'sm',
  fontWeight: 'bold'
})
