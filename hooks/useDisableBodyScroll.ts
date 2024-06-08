import { useEffect } from 'react'

export const useToggleBodyScroll = (isDisabled: boolean) => {
  useEffect(() => {
    if (isDisabled) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isDisabled])
}
