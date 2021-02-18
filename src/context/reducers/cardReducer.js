import { STACK_CARDS, FETCH_CARDS, SET_HAS_MORE } from 'common/constants'
import { initialCardState } from 'common/initialStates'

const cardReducer = (state = initialCardState, action) => {
  switch (action.type) {
    case STACK_CARDS:
      return { ...state, cards: [...state.cards, ...action.cards] }

    case FETCH_CARDS:
      return { ...state, fetching: action.fetching }

    case SET_HAS_MORE:
      return { ...state, hasMore: action.hasMore }

    default:
      return state
  }
}

export default cardReducer
