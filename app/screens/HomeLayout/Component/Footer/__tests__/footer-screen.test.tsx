import React from 'react';
import {render} from '../../../../../../testing/test-utils';
import {fireEvent} from '@testing-library/react-native';
import FooterScreen from '../footer-screen';

describe('footer-screen', () => {
  test('test footer screen component', () => {
    const props = {
      onPress: jest.fn(),
      totalSaving: 300,
    };
    const {getByTestId} = render(<FooterScreen {...props} />);

    const node = getByTestId('onPressButton');

    expect(node).toBeTruthy();
    fireEvent.press(node);
  });
  test('test footer screen component when saving is less than 0', () => {
    const props = {
      onPress: jest.fn(),
      totalSaving: -1,
    };
    const {getByTestId} = render(<FooterScreen {...props} />);

    const node = getByTestId('onPressButton');

    expect(node).toBeTruthy();
    fireEvent.press(node);
  });
});
