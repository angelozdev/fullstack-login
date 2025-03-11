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
          "&:hover": {
            bg: "blue.600",
            boxShadow: "md",
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
