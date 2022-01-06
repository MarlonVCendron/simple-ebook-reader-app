import { call, put } from 'redux-saga/effects';
import { getStoragePermission, checkStoragePermissions } from '../../util/permissions';
import { addBooksSuccess, addBooksFailure } from './actions';

import DocumentPicker, { types } from 'react-native-document-picker'

export function* addBooks() {
  const granted = yield call(checkStoragePermissions);
  if (!granted) yield call(getStoragePermission);

  try {
    // const result = yield call(DocumentPicker.pickMultiple, { type: "application/epub+zip" });
    const result = yield call(DocumentPicker.pickMultiple);
    yield put(addBooksSuccess(result));
  } catch (e) {
    console.log(e);
    yield put(addBooksFailure());
  }
};

export const addMetadata = (data, index) => {
  return { type: 'add_metadata', payload: { data, index } };
};

export const removeBook = (index) => {
  return { type: 'remove_book', payload: index };
};
