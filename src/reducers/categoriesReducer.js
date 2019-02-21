import {
  SELECT_CATEGORY,
  SELECT_ALL_CATEGORIES
} from '../actions'

export default function selectCategory(state = '', action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.payload
    default:
      return state
  }
}
