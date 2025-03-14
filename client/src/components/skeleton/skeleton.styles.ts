import { css } from '~/styled-system/css'
import { flex } from '~/styled-system/patterns'

export const skeletonStyles = css({
  w: '100%',
  bg: 'gray.300',
  borderRadius: '1.5rem',
  animationName: 'pulse',
  animationDuration: '1.5s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'ease-in-out'
})

export const paragraphStyles = flex({ direction: 'column', gap: 2, w: '100%' })

export const lineStyles = css({ h: 4, display: 'inline-block' })

export const circleStyles = css({ borderRadius: 'full' })
