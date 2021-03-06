import { createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import reducer from './reducers/videos'
// import storage from 'redux-persist/lib/storage' Lo tuve que borrar porque si no no anda el AsyncStorage
import AsyncStorage from '@react-native-community/async-storage';

// const store = createStore(reducer, {
//     suggestionList: [],
//     categoryList: [],
// })

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['selectedMovie']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export {store, persistor};