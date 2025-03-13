import { Card } from "~/components";
import { css } from "~/styled-system/css";

interface ICardInfoProps {
  editMode: boolean;
  editable: boolean;
  name: string;
  defaultValue: string | number;
  label: string;
  displayValue: string | number;
}

function CardInfo({
  editMode,
  editable,
  name,
  defaultValue,
  label,
  displayValue,
}: ICardInfoProps) {
  return (
    <Card>
      <div
        className={css({ display: "flex", flexDirection: "column", gap: 2 })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
          })}
        >
          <label>{label}: </label>

          {editMode && editable ? (
            <input
              className={css({
                bg: "white",
                w: "full",
                px: 2,
                py: 1,
                borderRadius: 4,
              })}
              name={name}
              defaultValue={defaultValue}
            />
          ) : (
            <span
              className={css({
                fontWeight: "semibold",
                textAlign: "right",
                w: "full",
              })}
            >
              {displayValue}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}

export default CardInfo;
