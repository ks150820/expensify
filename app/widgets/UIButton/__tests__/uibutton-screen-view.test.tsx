import {fireEvent} from '@testing-library/react-native';
import React from 'react';
import {render} from '../../../../testing/test-utils';
import UIButtonScreenView from '../uibutton-screen-view';

describe('uibutton-screen-view', () => {
  test('test onPress Method', () => {
    const props = {
      onPress: jest.fn(),
    };
    const {getByTestId} = render(<UIButtonScreenView {...props} />);

    fireEvent.press(getByTestId('onPressButton'));
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });
});
