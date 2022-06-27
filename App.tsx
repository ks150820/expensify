import '@babel/polyfill';
import React from 'react';
import {Provider} from 'react-redux';

import {store} from './app/store/configureStore';
import AppLayout from './app/AppLayout';

type Props = {};

const App: React.FC<Props> = ({}) => {
  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
};

export default App;
