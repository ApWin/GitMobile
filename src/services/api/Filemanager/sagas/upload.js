import { call, all, put, takeEvery } from 'redux-saga/effects'

import {upload} from '../routines'
import TokenStorage from "../../../TokenStorage";

function * trigger (api, action) {
    const { request } = action.payload;
    try {
        yield put(upload.request());

        const currentToken = yield call(TokenStorage.get);

        if(currentToken)
            yield call(api.setToken, currentToken);

        const response = yield call(api.filemanager.upload, request);

        // console.log(JSON.stringify(response.data));
        yield put(
            upload.success({
                request,
                response
            })
        )
    } catch (e) {
        yield put(upload.failure(e))
    } finally {
        yield put(upload.fulfill())
    }
}

export default function * (api) {
    yield takeEvery(upload.TRIGGER, trigger, api)
}
