import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import books from './books';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export default combineReducers({ books: persistReducer(persistConfig, books) })
// export default persistReducer(persistConfig, books)
