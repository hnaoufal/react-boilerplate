import { fork } from 'redux-saga/effects';

import { reviewsSagas } from './reviewsSagas';

export default function* sagas() {
  yield fork(reviewsSagas);
}
