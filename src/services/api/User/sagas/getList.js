import {call, all, put, takeEvery} from 'redux-saga/effects';

import {getList} from '../routines';

function* trigger(api, action) {
  const {request} = action.payload;

  try {
    yield put(getList.request());

    const response = yield call(api.user.getList, request);

    yield all([
      put(
        getList.success({
          request,
          response,
        }),
      ),
    ]);
  } catch (e) {
    yield put(getList.failure(e));
  } finally {
    yield put(getList.fulfill());
  }
}

export default function* (api) {
  yield takeEvery(getList.TRIGGER, trigger, api);
}
