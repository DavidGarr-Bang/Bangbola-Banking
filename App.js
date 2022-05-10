import * as React from "react";

// navagation
import NavigationContainer from "./container/NavigationContainer/";

// redux
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";

import configureStore from "./urtils/redux/store/";

const store = configureStore();
const persistor = persistStore(store);

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer />
      </PersistGate>
    </Provider>
  );
};
export default Root;
