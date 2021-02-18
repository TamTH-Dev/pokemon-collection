import { useEffect, useCallback } from 'react'

import { ADVANCE_PAGE } from 'common/constants'

const useInfiniteScroll = (
  lastCardRef,
  fetching,
  hasMore,
  dispatch,
  observer
) => {
  const observeScroll = useCallback(
    (node) => {
      if (fetching) return

      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && hasMore) {
          dispatch({ type: ADVANCE_PAGE })
        }
      })

      if (node) observer.current.observe(node)
    },
    [dispatch, fetching, observer, hasMore]
  )

  useEffect(() => {
    if (lastCardRef.current && hasMore) {
      observeScroll(lastCardRef.current)
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
      return null
    }
  }, [observeScroll, lastCardRef, hasMore, observer])
}

export default useInfiniteScroll
