import LogoutButton from './logout-button'
import { Button } from '~/components'
import { css } from '~/styled-system/css'
import { IUser } from '~/types/user'

interface IHeaderProps {
  showBalance: boolean
  toggleBalance: () => void
  editMode: boolean
  toggleEditMode: () => void
  user: IUser
}

function Header({
  editMode,
  showBalance,
  toggleBalance,
  toggleEditMode,
  user
}: IHeaderProps) {
  return (
    <header className={css({ bg: 'gray.100', p: 4 })}>
      <div className={css({ display: 'flex', justifyContent: 'flex-end' })}>
        <LogoutButton />
      </div>

      <figure
        className={css({
          display: 'flex',
          justifyContent: 'center',
          p: 4,
          flexDirection: 'column',
          alignItems: 'center'
        })}
      >
        <img
          className={css({
            borderRadius: 'full',
            objectFit: 'cover',
            maxWidth: '100%',
            w: '100px',
            h: '100px',
            boxShadow: 'md'
          })}
          width={100}
          height={100}
          src={user.picture}
          alt={user.name.first}
        />

        <figcaption className={css({ mt: 4, textAlign: 'center' })}>
          <h1 className={css({ fontSize: 'xl', fontWeight: 'bold' })}>
            {user.name.first} {user.name.last}
          </h1>

          <p className={css({ color: 'gray.500' })}>{user.email}</p>
        </figcaption>
      </figure>

      <div className={css({ display: 'flex', gap: 4, my: 4 })}>
        <Button
          variant={showBalance ? 'warning' : 'success'}
          onClick={toggleBalance}
        >
          {showBalance ? 'Hide' : 'Show'} balance
        </Button>
        <Button
          variant={editMode ? 'danger' : 'secondary'}
          onClick={toggleEditMode}
        >
          {editMode ? 'Cancel edit' : 'Edit'}
        </Button>
      </div>
    </header>
  )
}

export default Header
