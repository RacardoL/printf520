import { GET_DETAIL_LIST } from './acitonTypes'

export const getDetailListAction = (data) => {
  return {
    type: GET_DETAIL_LIST,
    value: data
  }
}
