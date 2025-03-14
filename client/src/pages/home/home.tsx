import { HomeSkeleton, Header, Content } from './components'
import InactiveAccountAlert from './components/inactive-account-alert'
import { formStyles } from './home.styles'
import { useMutation } from '@tanstack/react-query'
import { useOptimistic } from 'react'
import { useToggle } from '~/hooks'
import { queryClient, queryKeys } from '~/libs/react-query'
import { useAuth } from '~/providers/auth-provider'
import usersService from '~/services/users'
import { css, cx } from '~/styled-system/css'

interface IFields {
  phone: string
  address: string
  company: string
}

function HomePage() {
  const { user } = useAuth()
  const [showBalance, toggleBalance] = useToggle(false)
  const [editMode, toggleEditMode] = useToggle(false)
  const [optimisticFields, setOptimisticFields] = useOptimistic({
    address: user?.address || '',
    phone: user?.phone || '',
    company: user?.company || ''
  })

  const { mutateAsync: updateUser, isPending } = useMutation({
    mutationFn: ({ id, fields }: { id: string; fields: IFields }) =>
      usersService.update(id, fields),
    onMutate: ({ fields }) => {
      toggleEditMode()
      setOptimisticFields(fields)
    }
  })

  const updateUserHandler = async (form: FormData) => {
    if (!user) return

    try {
      const fields = {
        address: form.get('address') as string,
        phone: form.get('phone') as string,
        company: form.get('company') as string
      }

      await updateUser({ id: user._id, fields })
      await queryClient.refetchQueries({ queryKey: queryKeys.user.me })
    } catch (error) {
      console.error('[HomePage]', error)
    }
  }

  if (!user) return <HomeSkeleton />

  return (
    <div>
      {user.isActive === false && <InactiveAccountAlert />}

      <form
        className={cx(
          formStyles,
          css({ opacity: user.isActive === false ? 1 : 0.8 })
        )}
        action={updateUserHandler}
      >
        <Header
          editMode={editMode}
          showBalance={showBalance}
          toggleBalance={toggleBalance}
          toggleEditMode={toggleEditMode}
          user={user}
        />

        <Content
          editMode={editMode}
          isPending={isPending}
          optimisticFields={optimisticFields}
          showBalance={showBalance}
          user={user}
        />
      </form>
    </div>
  )
}

export default HomePage
