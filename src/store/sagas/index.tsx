import { all, fork } from 'redux-saga/effects';
import AuthSaga from '@/store/auth/saga';

export default function* rootSaga() {
  yield all([
    fork(AuthSaga),
  ]);
}
