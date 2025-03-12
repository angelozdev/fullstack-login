import { Button } from "~/components";
import { useAuth } from "~/providers/auth-provider";
import { css } from "~/styled-system/css";

function InactiveAccountAlert() {
  const { logout } = useAuth();
  return (
    <div
      role="alert"
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        inset: 0,
        bg: "rgba(24, 12, 12, 0.5)",
        zIndex: 1,
      })}
    >
      <div
        className={css({
          p: 4,
          bg: "white",
          borderRadius: "md",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        })}
      >
        <p className={css({ fontWeight: "bold" })}>
          Your account is not active
        </p>
        <p>
          Please contact support to activate your account and start using the
          app.
        </p>

        <Button onClick={logout}>Logout</Button>
      </div>
    </div>
  );
}

export default InactiveAccountAlert;
