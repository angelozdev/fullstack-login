import { css, cx } from "~/styled-system/css";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, className, ...rest }: IButtonProps) {
  return (
    <button
      className={cx(
        className,
        css({
          height: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "md",
          bg: "blue.500",
          color: "white",
          cursor: "pointer",
          fontWeight: "semibold",
          transition: "all 0.2s",
          "&:not(:disabled):hover": {
            bg: "blue.600",
            boxShadow: "md",
          },
          "&:disabled": {
            bg: "gray.300",
            color: "gray.500",
            cursor: "not-allowed",
            opacity: 0.5,
          },
        })
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
