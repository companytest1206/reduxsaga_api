import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects'
import { REQUEST, REQUEST_REMOVE, REQUEST_SUCCESS } from './../store/action/types'
import api from './../api';

function* fetchData (action) {
    try {
        const apiConfig = {
          method: 'get',
          url:  api + '/random.php',
        };
    
        const response = yield call(axios, apiConfig);
        const payload = {
            idDrink: response.data.drinks[0].idDrink,
            strDrink: response.data.drinks[0].strDrink,
        }
    yield put({ type: REQUEST_SUCCESS, payload });
  } catch (e) {
    console.log(e);
    yield put({ type: REQUEST_REMOVE });
  }
}

function* saga () {
  yield takeEvery(REQUEST, fetchData)
}

export default saga;