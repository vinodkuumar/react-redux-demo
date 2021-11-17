import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducer';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        'cake',
        'ice'
    ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(logger,thunk)));
export const persistor = persistStore(store);

