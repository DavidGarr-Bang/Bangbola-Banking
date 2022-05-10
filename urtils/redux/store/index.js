import { themeReducer } from "../reducers/themeReducer";
import { billReducer } from "../reducers/billReducer";
import { usersReducer } from "../reducers/usersReducer";
import { moneyReducer } from "../reducers/moneyReducer";
import { NotificationsReducer } from "../reducers/notificationsReducer";

import AsyncStorage from "@react-native-async-storage/async-storage";

import createSecureStore from "redux-persist-expo-securestore";

import { persistReducer } from "redux-persist";

import { createStore, combineReducers } from "redux";

const storage = createSecureStore();

const themePersistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const billPersistConfig = {
  key: "bills",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  theme: persistReducer(themePersistConfig, themeReducer),
  bills: billReducer,
  users: usersReducer,
  money: moneyReducer,
  notifications: NotificationsReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
