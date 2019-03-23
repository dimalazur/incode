import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import {
  GET_CLIENTS_REQUEST,
  GET_CLIENTS_SUCCESS,
  GET_CLIENTS_FAILURE
} from '../actions/actions';
import { authApi } from '../API';


function* getClients(actions) {
  const success = payload => ({ type: GET_CLIENTS_SUCCESS, payload });
  const failure = payload => ({ type: GET_CLIENTS_FAILURE, payload });

  try {
    const res = yield call(authApi.getClients);

    yield put(success(res.data));
  } catch (e) {
    yield put(failure(e));
  }
}


function* notesSaga() {
  yield takeEvery(GET_CLIENTS_REQUEST, getClients);

}

export default notesSaga;