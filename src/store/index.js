import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(
  sagaMiddleware,
  thunkMiddleware,
);

export const store = createStore(rootReducer, middleware);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);