import { ENTER_REQUEST_TEXT } from '../actions'

export default (state = {}, { type, searchString }) => {
  switch (type) {
    case ENTER_REQUEST_TEXT:
      return searchString
    default:
      return state
  }
}
