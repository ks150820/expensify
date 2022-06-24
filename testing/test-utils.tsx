import React from 'react';
import {render as rtlRender, RenderAPI} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import reducers from '../app/store/reducers';

const render = (
  component: React.ReactElement<any>,
  {
    preloadedState,
    store = configureStore({reducer: reducers, preloadedState}),
    ...renderOptions
  }: any = {},
): RenderAPI => {
  const wrapper = ({children}: any) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(component, {wrapper: wrapper, ...renderOptions});
};

export {render};
