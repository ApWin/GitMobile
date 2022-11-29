import { call, all, put, takeEvery } from 'redux-saga/effects'

import {deleteImage} from '../routines'
import TokenStorage from "../../../TokenStorage";

function * trigger (api, action) {
    const { request } = action.payload;
    try {
        yield put(deleteImage.request());

        const response = yield call(api.filemanager.deleteImage, request);
        // console.log(JSON.stringify(response.data));
        yield put(
            deleteImage.success({
                request,
                response
            })
        )
    } catch (e) {
        yield put(deleteImage.failure(e))
    } finally {
        yield put(deleteImage.fulfill())
    }
}

export default function * (api) {
    yield takeEvery(deleteImage.TRIGGER, trigger, api)
}
