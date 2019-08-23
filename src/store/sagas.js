import { put, takeEvery } from 'redux-saga/effects'
import { getDetailList, getTypeList } from '../api/hot'
import { GET_DETAIL_LIST, GET_TYPE_SAGA } from './acitonTypes'
import { asyncListAction, asyncGetType } from './actionCreators'


function* getHotList(item) {
  try {
    const res = yield getDetailList({ id: item.value })
    const action = asyncListAction(res.data.Data)
    yield put(action)
  } catch (e) {
    console.log(e)
    throw e
  }
}

function* getTypes() {
  try {
    const res = yield getTypeList()
    const action = asyncGetType(res.data.Data)
    yield put(action)
    yield getHotList({value: res.data.Data[0].id})

  } catch (e) {
    console.log(e)
  }
}

function* sagas() {
  yield takeEvery(GET_DETAIL_LIST, getHotList)
  yield takeEvery(GET_TYPE_SAGA, getTypes)
}

export default sagas
