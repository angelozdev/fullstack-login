import { Skeleton } from "~/components";
import { flex } from "~/styled-system/patterns";

function InputSkeleton() {
  return (
    <div className={flex({ direction: "column", gap: 1 })}>
      <Skeleton.Rectangle height={16} width={100} />
      <Skeleton.Rectangle height={48} />
    </div>
  );
}

function LoginSkeleton() {
  return (
    <div className={flex({ direction: "column", gap: 4 })}>
      <div className={flex({ justifyContent: "center" })}>
        <Skeleton.Square size={150} />
      </div>

      <div className={flex({ direction: "column", gap: 4 })}>
        <InputSkeleton />
        <InputSkeleton />
      </div>

      <Skeleton.Rectangle height={48} />
    </div>
  );
}

export default LoginSkeleton;
