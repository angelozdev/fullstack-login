import smartPumpLogo from "../../assets/logo.png";

// components
import { Button, Label, Input } from "~/components";

// utils
import { css } from "~/styled-system/css";
import { useToggle } from "~/hooks";
import LocalStorage, { LSKeys } from "~/libs/ls";
import { useMutation } from "@tanstack/react-query";
import accountServices from "~/services/account";
import { useAuth } from "~/providers/auth-provider";

const userStorage = new LocalStorage(LSKeys.LOGGED_USER);

function LoginPage() {
  const [showPassword, setShowPassword] = useToggle(false);
  const { setUser } = useAuth();
  const { mutate: login, isPending } = useMutation({
    mutationFn: accountServices.login,
  });

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    login(
      { email, password },
      {
        onSuccess: ({ data }) => {
          setUser(data);
          userStorage.set(data);
        },
      }
    );
  };

  return (
    <form aria-disabled={isPending} onSubmit={submitHandler}>
      <figure className={css({ display: "flex", justifyContent: "center" })}>
        <img
          className={css({ w: 150, h: 150, objectFit: "contain" })}
          width={150}
          height={150}
          src={smartPumpLogo}
          alt="SmartPump Logo"
        />
      </figure>

      <div
        className={css({ display: "flex", flexDirection: "column", gap: 4 })}
      >
        <Label label="Email">
          <Input
            defaultValue="henderson.briggs@geeknet.net"
            disabled={isPending}
            name="email"
            aria-label="email"
            type="email"
            placeholder="email@mail.com"
          />
        </Label>

        <Label label="Password">
          <Input
            defaultValue="23derd*334"
            disabled={isPending}
            name="password"
            aria-label="password"
            type={showPassword ? "text" : "password"}
            placeholder={showPassword ? "My password" : "••••••••••••••••"}
          />
        </Label>

        <button type="button" onClick={setShowPassword}>
          {showPassword ? "Hide" : "Show"} Password
        </button>

        <Button disabled={isPending} type="submit">
          Login
        </Button>
      </div>
    </form>
  );
}

export default LoginPage;
