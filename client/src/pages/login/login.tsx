import smartPumpLogo from "../../assets/logo.png";

// components
import { Button, Label, Input } from "~/components";

// utils
import { css } from "~/styled-system/css";
import { useToggle } from "~/hooks";

function LoginPage() {
  const [showPassword, setShowPassword] = useToggle(false);

  return (
    <form>
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
        <Label label="Username">
          <Input
            name="username"
            aria-label="username"
            type="text"
            placeholder="John Doe"
          />
        </Label>

        <Label label="Password">
          <Input
            name="password"
            aria-label="password"
            type={showPassword ? "text" : "password"}
            placeholder={showPassword ? "My password" : "••••••••••••••••"}
          />
        </Label>

        <button type="button" onClick={setShowPassword}>
          {showPassword ? "Hide" : "Show"} Password
        </button>

        <Button type="submit">Login</Button>
      </div>
    </form>
  );
}

export default LoginPage;
