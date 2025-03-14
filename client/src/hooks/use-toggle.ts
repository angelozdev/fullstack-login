import { useCallback, useState } from 'react'

function useToggle(initialValue: boolean): [boolean, () => void] {
  const [value, setValue] = useState(initialValue)
  const toggle = useCallback(() => setValue((value) => !value), [])

  return [value, toggle]
}

export default useToggle
