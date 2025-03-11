import { css } from "~/styled-system/css";

type IInputProps = React.InputHTMLAttributes<HTMLInputElement>;

function Input({ ...rest }: IInputProps) {
  return (
    <input
      className={css({
        border: "1px solid",
        borderColor: "gray.300",
        p: 2,
        borderRadius: "md",
        "&:disabled": {
          bg: "gray.200",
          cursor: "not-allowed",
          opacity: 0.5,
        },
      })}
      {...rest}
    />
  );
}

export default Input;
