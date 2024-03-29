import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./models/home/counterSlice";
import authSlice from "./models/home/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  home: counterSlice,
  auth: authSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'home'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}),
});

const persistor = persistStore(store);

export {
  store, 
  persistor
};