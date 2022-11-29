import { createRoutine, promisifyRoutine } from 'redux-saga-routines'

export const upload = createRoutine('UPLOAD_FILE_MANAGER');
export const deleteImage = createRoutine('DELETE_FILE_MANAGER');

export default {
    upload: promisifyRoutine(upload),
    deleteImage: promisifyRoutine(deleteImage)
}
