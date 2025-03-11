import { useAuth } from "~/providers/auth-provider";
import { Header } from "./components";
import { css } from "~/styled-system/css";
import { Button } from "~/components";

function HomePage() {
  const { user } = useAuth();

  return (
    <div>
      <Header />

      <figure
        className={css({ display: "flex", justifyContent: "center", p: 4 })}
      >
        <img
          className={css({
            borderRadius: "full",
            objectFit: "cover",
            maxWidth: "100%",
            w: "180px",
            h: "180px",
            boxShadow: "md",
          })}
          width={180}
          height={180}
          src={user?.picture}
          alt={user?.name.first}
        />
      </figure>

      <div className={css({ display: "flex", gap: 4, p: 4 })}>
        <Button>Balance</Button>
        <Button>Edit</Button>
      </div>
    </div>
  );
}

export default HomePage;
