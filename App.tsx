import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { Provider } from "react-redux";
import { store } from "./app/store/configureStore"

type Props = {}

const App: React.FC<Props> = ({ }) => {

  return (
    <Provider store={store}>
    <View>
      <Text>Hello Expensify</Text>
      <Icon name="add" />
    </View>
    </Provider>
  );
};

export default App;
