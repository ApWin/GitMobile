import {all} from 'redux-saga/effects';

import getMe from './getMe';
import getList from './getList';
import getUserDetails from "./getUserDetails";

export default function* sagas(api) {
  yield all([getMe(api), getList(api), getUserDetails(api)]);
}
