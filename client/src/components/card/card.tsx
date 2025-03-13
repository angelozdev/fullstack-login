import { PropsWithChildren } from "react";
import { css } from "~/styled-system/css";

function Card({ children }: PropsWithChildren) {
  return (
    <div
      className={css({
        borderRadius: "1.5rem",
        px: 6,
        py: 4,
        bg: "gray.100",
        color: "text",
        minH: 12,
      })}
    >
      {children}
    </div>
  );
}

export default Card;
