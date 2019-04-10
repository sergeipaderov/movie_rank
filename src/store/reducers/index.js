import { combineReducers } from 'redux'

import data from './data'
import request from './request'
import details from './details'

export default combineReducers({
  data,
  request,
  details,
})
