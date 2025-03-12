import { PropsWithChildren } from "react";
import { css } from "~/styled-system/css";

function Card({ children }: PropsWithChildren) {
  return (
    <div
      className={css({
        borderRadius: "md",
        boxShadow: "md",
        p: 4,
        bg: "white",
        color: "text",
      })}
    >
      {children}
    </div>
  );
}

export default Card;
