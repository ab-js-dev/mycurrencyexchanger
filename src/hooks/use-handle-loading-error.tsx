import React, { useEffect } from 'react'
interface UseHandleLoadingErrorReturn {
  showError: boolean
  setShowError: (showError: boolean) => void
}
export const useHandleLoadingError = (loadingDataError: string): UseHandleLoadingErrorReturn => {
  const [showError, setShowError] = React.useState(false)
  useEffect(() => {
    if (loadingDataError !== '') {
      setShowError(true)
    }
  }, [loadingDataError])
  return { showError, setShowError }
}
