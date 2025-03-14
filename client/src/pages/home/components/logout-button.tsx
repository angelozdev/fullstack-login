import { useAuth } from '~/providers/auth-provider'
import { css } from '~/styled-system/css'

function LogoutButton() {
  const { logout } = useAuth()

  return (
    <button
      onClick={logout}
      className={css({
        bg: 'transparent',
        color: 'gray.800',
        p: 2,
        cursor: 'pointer'
      })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        width={24}
        height={24}
        className={css({ stroke: 'gray.800', transform: 'rotate(180deg)' })}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
        />
      </svg>
    </button>
  )
}

export default LogoutButton
