import { ADVANCE_PAGE } from 'common/constants'
import { initialPageState } from 'common/initialStates'

const pageReducer = (state = initialPageState, action) => {
  switch (action.type) {
    case ADVANCE_PAGE:
      return { ...state, page: state.page + 1 }

    default:
      return state
  }
}

export default pageReducer
