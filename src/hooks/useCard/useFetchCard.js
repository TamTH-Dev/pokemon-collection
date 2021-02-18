import { useEffect, useCallback } from 'react'
import axios from 'axios'

import {
  STACK_CARDS,
  FETCH_CARDS,
  PAGE_SIZE,
  SET_HAS_MORE,
} from 'common/constants'

const useFetchCard = (page, hasMore, dispatch) => {
  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get('https://api.pokemontcg.io/v2/cards', {
        params: {
          page,
          pageSize: PAGE_SIZE,
        },
      })

      const { data, totalCount } = res.data
      const div = totalCount / PAGE_SIZE
      const totalPage = Number.isInteger(div) ? div : div + 1

      dispatch({ type: STACK_CARDS, cards: data })
      dispatch({ type: FETCH_CARDS, fetching: false })
      dispatch({ type: SET_HAS_MORE, hasMore: page < totalPage })
    } catch (err) {
      dispatch({ type: FETCH_CARDS, fetching: false })
      throw err
    }
  }, [page, dispatch])

  useEffect(() => {
    dispatch({ type: FETCH_CARDS, fetching: true })

    if (hasMore) {
      fetchData()
    }
  }, [fetchData, dispatch, hasMore])
}

export default useFetchCard
