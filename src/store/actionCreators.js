// eslint-disable-next-line import/named
import {
  GET_DETAIL_LIST,
  ASYNC_LIST,
  GET_TYPE,
  GET_TYPE_SAGA
} from './acitonTypes'

export const getDetailListAction = (data) => {
  return {
    type: GET_DETAIL_LIST,
    value: data
  }
}
export const asyncListAction = (data) => {
  return {
    type: ASYNC_LIST,
    value: data
  }
}

export const getType = (data) => {
  return {
    type: GET_TYPE_SAGA,
    value: data
  }
}

export const asyncGetType = (data) => {
  return {
    type: GET_TYPE,
    value: data
  }
}
