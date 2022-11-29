import {call, all, put, takeEvery} from 'redux-saga/effects';

import {getUserDetails} from '../routines';

function* trigger(api, action) {
  const {request} = action.payload;

  try {
    yield put(getUserDetails.request());

    const response = yield call(api.user.getUserDetails, request);

    yield all([
      put(
        getUserDetails.success({
          request,
          response,
        }),
      ),
    ]);
  } catch (e) {
    yield put(getUserDetails.failure(e));
  } finally {
    yield put(getUserDetails.fulfill());
  }
}

export default function* (api) {
  yield takeEvery(getUserDetails.TRIGGER, trigger, api);
}
