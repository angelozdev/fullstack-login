import { useCallback, useRef } from "react";
import useUnmount from "./use-unmount";

type ICustomEventCallback<T = unknown> = (event: CustomEvent<T>) => void;

function useCustomEventManager<T>(event: string) {
  const listeners = useRef([] as ICustomEventCallback<T>[]);

  const listenEvent = useCallback(
    (cb: ICustomEventCallback<T>) => {
      listeners.current.push(cb);
      document.addEventListener(event, cb as EventListener);

      console.info(`Event listener added for ${event}`);

      return () => {
        document.removeEventListener(event, cb as EventListener);
      };
    },
    [event]
  );

  const dispatchEvent = useCallback(
    <T>(detail: T) => {
      document.dispatchEvent(new CustomEvent(event, { detail }));
      console.info(`Event dispatched for ${event}`);
    },
    [event]
  );

  const removeEvent = useCallback(() => {
    listeners.current.forEach((cb) => {
      document.removeEventListener(event, cb as EventListener);
      console.info(`Event listener removed for ${event}`);
    });
  }, [event]);

  useUnmount(removeEvent);

  return [listenEvent, dispatchEvent, removeEvent] as const;
}

export default useCustomEventManager;
