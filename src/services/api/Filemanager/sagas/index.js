import { all } from "redux-saga/effects";
import upload from './upload'
import deleteImage from './deleteImage'

export default function * sagas (api) {
    yield all(
        [
            upload(api),
            deleteImage(api)
        ]
    )
}
