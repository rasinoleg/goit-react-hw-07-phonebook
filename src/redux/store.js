import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 


const persistConfig = {
  key: 'root', 
  storage, 
};

const persistedReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer, 
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false, 
  }),
});

export const persistor = persistStore(store); 

export default store;





// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import contactReducer from './contactSlice';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; 
// import thunk from 'redux-thunk';

// const persistConfig = {
//   key: 'root', 
//   storage, 
// };

// const persistedReducer = persistReducer(persistConfig, contactReducer);

// export const store = configureStore({
//   reducer: {
//     contacts: persistedReducer, 
//   },
//   middleware: getDefaultMiddleware({
//     thunk: true,
//     serializableCheck: false, 
//   }).concat(thunk),
// });

// export const persistor = persistStore(store); 

// export default store;





