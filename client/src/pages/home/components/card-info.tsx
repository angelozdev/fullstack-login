import { Card, Input } from "~/components";
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
      <label
        className={css({ display: "flex", flexDirection: "column", gap: 2 })}
      >
        <p>
          <strong>{label}: </strong> {displayValue}
        </p>
        {editMode && editable && (
          <Input name={name} defaultValue={defaultValue} />
        )}
      </label>
    </Card>
  );
}

export default CardInfo;
