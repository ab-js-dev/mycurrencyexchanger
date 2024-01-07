import { renderHook, act } from '@testing-library/react-hooks'
import { useHandleLoadingError } from '@hooks/use-handle-loading-error' // Adjust the import path as necessary

describe('useHandleLoadingError', () => {
  it('initially sets showError to false', () => {
    const { result } = renderHook(() => useHandleLoadingError(''))

    expect(result.current.showError).toBe(false)
  })

  it('sets showError to true when there is an error', () => {
    const { result, rerender } = renderHook(({ error }) => useHandleLoadingError(error), {
      initialProps: { error: '' }
    })

    // Trigger the effect with a new error
    act(() => {
      rerender({ error: 'An error occurred' })
    })

    expect(result.current.showError).toBe(true)
  })

  it('allows showError to be manually toggled', () => {
    const { result } = renderHook(() => useHandleLoadingError(''))

    // Manually set showError to true
    act(() => {
      result.current.setShowError(true)
    })

    expect(result.current.showError).toBe(true)

    // Manually set showError to false
    act(() => {
      result.current.setShowError(false)
    })

    expect(result.current.showError).toBe(false)
  })
})
