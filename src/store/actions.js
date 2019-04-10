export const REQUEST_API_DATA = 'REQUEST_API_DATA'
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA'
export const ENTER_REQUEST_TEXT = 'ENTER_REQUEST_TEXT'
export const REQUEST_DETAILS_DATA = 'REQUEST_DETAILS_DATA'
export const RECEIVE_DETAILS_DATA = 'RECEIVE_DETAILS_DATA'

export const requestApiData = () => ({ type: REQUEST_API_DATA })
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data })
export const enterRequestText = searchString => ({ type: ENTER_REQUEST_TEXT, searchString })
export const requestDetailsData = id => ({ type: REQUEST_DETAILS_DATA, id })
export const receiveDetailsData = data => ({ type: RECEIVE_DETAILS_DATA, data })
