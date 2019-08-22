import { put, takeEvery } from 'redux-saga/effects'
import { getDetailList } from '../api/hot'
import { GET_DETAIL_LIST } from './acitonTypes'
import { getDetailListAction } from './actionCreators'


function* getHotList() {
  try {
    const res = yield getDetailList({ id: 1 })
    const action = getDetailListAction(res.data)
    yield put(action)
  } catch (e) {
    console.log(e)
    throw e
  }
}

function* sagas() {
  yield takeEvery(GET_DETAIL_LIST, getHotList)
}

export default sagas
