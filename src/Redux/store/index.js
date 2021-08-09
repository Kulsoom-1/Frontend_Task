import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers/index';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '@redux/sagas';
import {persistStore} from 'redux-persist';
const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware, createLogger());

export const store = createStore(reducer, middleware);
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);
export default {store, persistor};
