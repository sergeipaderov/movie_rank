import { call, put, takeLatest, all } from 'redux-saga/effects'

import { ENTER_REQUEST_TEXT, REQUEST_DETAILS_DATA, receiveApiData, receiveDetailsData } from './actions'
import { fetchData, fetchDetails } from './api'

function* getApiData(action) {
  try {
    const data = yield call(fetchData, action.searchString)
    yield put(receiveApiData(data))

  } catch (e) {
    console.log(e)
  }
}

function* getDetailsData(action) {
  try {
    const data = yield call(fetchDetails, action.id)
    yield put(receiveDetailsData(data))

  } catch (e) {
    console.log(e)
  }
}

export default function* mySaga() {
  yield all([
    takeLatest(ENTER_REQUEST_TEXT, getApiData),
    takeLatest(REQUEST_DETAILS_DATA, getDetailsData),
  ])
}
