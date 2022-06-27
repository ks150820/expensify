import React from 'react';
import {
  render as rtlRender,
  RenderAPI,
  renderHook as rtlRenderHook,
} from '@testing-library/react-native';
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

const renderHook = (viewModal: any, args: any = {}, preloadedState?: any) => {
  const wrapper = ({children}: any) => {
    const store = configureStore({
      reducer: reducers,
      preloadedState,
      middleware: (getDefaultMiddleware: any) => [...getDefaultMiddleware()],
    });
    return <Provider store={store}>{children}</Provider>;
  };

  const {result} = rtlRenderHook(() => viewModal(args), {wrapper});

  return {
    result,
  };
};

export {render, renderHook};
