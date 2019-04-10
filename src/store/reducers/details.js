import { RECEIVE_DETAILS_DATA } from '../actions'

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_DETAILS_DATA:
      return data
    default:
      return state
  }
}
