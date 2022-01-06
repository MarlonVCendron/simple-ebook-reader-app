import { all, takeLatest } from 'redux-saga/effects';

import { addBooks } from './books/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest('add_books', addBooks)
  ]);
}
