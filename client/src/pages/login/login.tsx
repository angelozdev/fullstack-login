import smartPumpLogo from '../../assets/logo.png'
import { Button, Input, Label } from '~/components'
import { useToggle } from '~/hooks'
import { useAuth } from '~/providers/auth-provider'
import { css } from '~/styled-system/css'

function LoginPage() {
  const [showPassword, setShowPassword] = useToggle(false)
  const { login, isLogingIn, isLoginError } = useAuth()

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = new FormData(event.currentTarget)
    const email = form.get('email') as string
    const password = form.get('password') as string

    login({ email, password })
  }

  return (
    <form
      aria-disabled={isLogingIn}
      onSubmit={submitHandler}
      className={css({ p: 4, mt: 8 })}
    >
      <figure className={css({ display: 'flex', justifyContent: 'center' })}>
        <img
          className={css({ w: 150, h: 150, objectFit: 'contain' })}
          width={150}
          height={150}
          src={smartPumpLogo}
          alt="SmartPump Logo"
        />
      </figure>

      <div
        className={css({ display: 'flex', flexDirection: 'column', gap: 4 })}
      >
        <Label label="Email">
          <Input
            defaultValue="henderson.briggs@geeknet.net"
            disabled={isLogingIn}
            name="email"
            aria-label="email"
            type="email"
            placeholder="email@mail.com"
          />
        </Label>

        <Label label="Password">
          <Input
            rightContent={
              <button type="button" onClick={setShowPassword}>
                {showPassword ? 'Hide' : 'Show'}
              </button>
            }
            defaultValue="23derd*334"
            disabled={isLogingIn}
            name="password"
            aria-label="password"
            type={showPassword ? 'text' : 'password'}
            placeholder={'••••••••••••••••'}
          />
        </Label>

        {isLoginError && (
          <p className={css({ color: 'red', textAlign: 'center' })}>
            Invalid email or password
          </p>
        )}

        <Button disabled={isLogingIn} type="submit" className={css({ mt: 6 })}>
          {isLogingIn ? 'Logging in...' : 'Login Now'}
        </Button>
      </div>
    </form>
  )
}

export default LoginPage
