import {fireEvent} from '@testing-library/react-native';
import React from 'react';
import {render} from '../../../../testing/test-utils';
import UIButtonScreen from '../uibutton-screen';

describe('uibutton-screen', () => {
  test('test onPress Method', () => {
    const props = {
      onPress: jest.fn(),
    };
    const {getByTestId} = render(<UIButtonScreen {...props} />);

    fireEvent.press(getByTestId('onPressButton'));
  });
});
