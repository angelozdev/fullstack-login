import useCustomEventManager from './use-custom-event-manager'
import { useEffect, useRef, useState } from 'react'
import LocalStorage, { LSKeys } from '~/libs/ls'

enum LSEvents {
  CHANGE = 'local-storage-change',
  REMOVE = 'local-storage-remove'
}

function useLocalStorage<T>(key: LSKeys, initialValue: T | null = null) {
  const ls = useRef(new LocalStorage<T>(key))
  const [value, setValue] = useState(ls.current.get(initialValue))
  const [listenChange, dispatchChange] = useCustomEventManager<{
    key: LSKeys
    value: T
  }>(LSEvents.CHANGE)

  const [listenRemove, dispatchRemove] = useCustomEventManager<{ key: LSKeys }>(
    LSEvents.REMOVE
  )

  const set = (newValue: T) => {
    ls.current.set(newValue)
    setValue(newValue)
    dispatchChange({ key, value: newValue })
  }

  const remove = () => {
    ls.current.remove()
    setValue(null)
    dispatchRemove({ key })
  }

  useEffect(() => {
    const unsubscribeChange = listenChange((event) => {
      if (event.detail.key === key) setValue(event.detail.value)
    })

    return unsubscribeChange
  }, [key, listenChange])

  useEffect(() => {
    const unsubscribeRemove = listenRemove((event) => {
      if (event.detail.key === key) setValue(null)
    })

    return unsubscribeRemove
  }, [key, listenRemove])

  return [value, set, remove] as const
}

export default useLocalStorage
