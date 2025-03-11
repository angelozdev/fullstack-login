import { useAuth } from "~/providers/auth-provider";
import { css } from "~/styled-system/css";
import { flex } from "~/styled-system/patterns";

function Header() {
  const { user, logout } = useAuth();

  return (
    <header
      className={css({
        bg: "gray.200",
        color: "gray.800",
        p: 4,
        position: "relative",
      })}
    >
      <div className={flex({ justifyContent: "center" })}>
        <h1 className={css({ fontSize: "xl" })}>
          {user?.name.first} {user?.name.last}
        </h1>

        <button
          onClick={logout}
          className={css({
            bg: "transparent",
            color: "gray.800",
            ml: 4,
            px: 2,
            py: 1,
            cursor: "pointer",
            position: "absolute",
            right: 4,
            top: 4,
          })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            width={24}
            height={24}
            className={css({ stroke: "gray.800", transform: "rotate(180deg)" })}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
