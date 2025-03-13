import { css, cx } from "~/styled-system/css";
import { flex } from "~/styled-system/patterns";

interface IParagraphProps {
  lines?: number;
}

const sharedStyles = css({
  w: "100%",
  bg: "gray.300",
  borderRadius: "1.5rem",
  animationName: "pulse",
  animationDuration: "1.5s",
  animationIterationCount: "infinite",
  animationTimingFunction: "ease-in-out",
  animationDirection: "alternate",
});

function Paragraph({ lines = 5 }: IParagraphProps) {
  return (
    <div
      role="progressbar"
      className={flex({ direction: "column", gap: 2, w: "100%" })}
    >
      {Array.from({ length: lines }).map((_, index) => (
        <span
          key={index}
          className={cx(sharedStyles, css({ h: 4, display: "inline-block" }))}
        />
      ))}
    </div>
  );
}

function Square({ size = 100 }: { size?: number }) {
  return <div style={{ width: size, height: size }} className={sharedStyles} />;
}

function Rectangle({
  width,
  height = 32,
}: {
  width?: number;
  height?: number | string;
}) {
  return <div style={{ width, height }} className={sharedStyles} />;
}

function Circle({ size = 100 }: { size?: number }) {
  return (
    <div
      className={cx(
        sharedStyles,
        css({ w: `${size}px`, h: `${size}px`, borderRadius: "full" })
      )}
    />
  );
}

const Skeleton = {
  Paragraph,
  Square,
  Rectangle,
  Circle,
};

export default Skeleton;
