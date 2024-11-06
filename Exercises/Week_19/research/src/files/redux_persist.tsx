
// in store.ts
import { combineReducers} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Choose your storage engine

import { configureStore } from '@reduxjs/toolkit';
const persistConfig = {
  key: 'root',
  storage,
  // Specify the reducers you want to persist
  whitelist: ['user'], // In this example, we persist the 'user' reducer
};
const reducers = combineReducers({
  products : productReducer,
  user : persistReducer(persistConfig,userReducer),
})
export const reduxStore = configureStore(reducers);
export const persistor = persistStore(reduxStore);

// in app.tsx

import { Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
const App = () => {
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        {/* your components */}
        {/* <RootComponent />  */}
      </PersistGate>
    </Provider>
  );
};
