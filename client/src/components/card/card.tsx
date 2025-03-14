import { PropsWithChildren } from "react";
import { css, cx } from "~/styled-system/css";

function Card({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cx(
        css({
          borderRadius: "1.5rem",
          px: 6,
          py: 4,
          bg: "gray.100",
          color: "text",
          minH: 12,
        }),
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
