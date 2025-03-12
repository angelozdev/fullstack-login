import { cva, cx } from "~/styled-system/css";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "success" | "warning";
}

const button = cva({
  base: {
    w: "full",
    height: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "md",
    color: "white",
    cursor: "pointer",
    fontWeight: "semibold",
    transition: "all 0.2s",
    "&:not(:disabled):hover": { boxShadow: "md" },
    "&:disabled": {
      bg: "gray.300",
      color: "gray.500",
      cursor: "not-allowed",
      opacity: 0.5,
    },
  },
  variants: {
    variant: {
      primary: {
        bg: "blue.500",
        "&:not(:disabled):hover": {
          bg: "blue.600",
        },
      },
      secondary: {
        bg: "gray.500",
        "&:not(:disabled):hover": {
          bg: "gray.600",
        },
      },
      danger: {
        bg: "red.500",
        "&:not(:disabled):hover": {
          bg: "red.600",
        },
      },
      success: {
        bg: "green.500",
        "&:not(:disabled):hover": {
          bg: "green.600",
        },
      },
      warning: {
        bg: "yellow.500",
        "&:not(:disabled):hover": {
          bg: "yellow.600",
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

function Button({
  children,
  className,
  variant,
  type = "button",
  ...rest
}: IButtonProps) {
  return (
    <button
      className={cx(className, button({ variant }))}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
