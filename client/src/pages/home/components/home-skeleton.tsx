import { Skeleton } from "~/components";
import { css } from "~/styled-system/css";
import { flex } from "~/styled-system/patterns";

function HomeSkeleton() {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: 4,
        mt: 8,
        p: 4,
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 4,
        })}
      >
        <Skeleton.Circle size={180} />
        <Skeleton.Paragraph lines={2} />
      </div>

      <div
        className={css({
          display: "flex",
          gap: 4,
        })}
      >
        <Skeleton.Rectangle height={50} />
        <Skeleton.Rectangle height={50} />
      </div>

      <ul className={flex({ direction: "column", gap: 4 })}>
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index}>
            <Skeleton.Rectangle height={70} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeSkeleton;
