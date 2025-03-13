import { useEffect } from "react";

function useUnmount(cb: () => void) {
  useEffect(() => {
    return () => cb();
  });
}

export default useUnmount;
