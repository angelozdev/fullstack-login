import useUnmount from './use-unmount'
import { useCallback, useRef } from 'react'

type ICustomEventCallback<T = unknown> = (event: CustomEvent<T>) => void

function useCustomEventManager<T>(event: string) {
  const listeners = useRef([] as ICustomEventCallback<T>[])

  const listenEvent = useCallback(
    (cb: ICustomEventCallback<T>) => {
      listeners.current.push(cb)
      document.addEventListener(event, cb as EventListener)

      return () => {
        document.removeEventListener(event, cb as EventListener)
      }
    },
    [event]
  )

  const dispatchEvent = useCallback(
    <T>(detail: T) => {
      document.dispatchEvent(new CustomEvent(event, { detail }))
    },
    [event]
  )

  const removeEvent = useCallback(() => {
    listeners.current.forEach((cb) => {
      document.removeEventListener(event, cb as EventListener)
    })
  }, [event])

  useUnmount(removeEvent)

  return [listenEvent, dispatchEvent, removeEvent] as const
}

export default useCustomEventManager
