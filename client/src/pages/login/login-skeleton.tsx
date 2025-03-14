import { Skeleton } from '~/components'
import { flex } from '~/styled-system/patterns'

function InputSkeleton() {
  return (
    <div className={flex({ direction: 'column', gap: 2 })}>
      <Skeleton.Rectangle height={16} width={'40%'} />
      <Skeleton.Rectangle height={48} />
    </div>
  )
}

function LoginSkeleton() {
  return (
    <div className={flex({ direction: 'column', gap: 4, p: 4, my: 8 })}>
      <div className={flex({ justifyContent: 'center' })}>
        <Skeleton.Square size={150} />
      </div>

      <div className={flex({ direction: 'column', gap: 4, mb: 4 })}>
        <InputSkeleton />
        <InputSkeleton />
      </div>

      <Skeleton.Rectangle height={48} />
    </div>
  )
}

export default LoginSkeleton
