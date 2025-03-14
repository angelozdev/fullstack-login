import { Skeleton } from '~/components'
import { css } from '~/styled-system/css'
import { flex } from '~/styled-system/patterns'

function HomeSkeleton() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      })}
    >
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 2,
          mb: 4,
          bg: 'gray.100',
          px: 4,
          py: 8
        })}
      >
        <Skeleton.Circle size={100} />
        <Skeleton.Rectangle height={16} width="40%" />
        <Skeleton.Rectangle height={16} width="60%" />

        <div
          className={css({
            display: 'flex',
            gap: 4,
            width: '100%',
            mt: 8
          })}
        >
          <Skeleton.Rectangle height={50} />
          <Skeleton.Rectangle height={50} />
        </div>
      </div>

      <ul className={flex({ direction: 'column', gap: 4, p: 4 })}>
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index}>
            <Skeleton.Rectangle height={50} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomeSkeleton
