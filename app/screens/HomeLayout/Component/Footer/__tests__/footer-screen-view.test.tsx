import React from 'react';
import {render} from '../../../../../../testing/test-utils';
import {fireEvent} from '@testing-library/react-native';
import FooterScreenView from '../footer-screen-view';

describe('footer-screen-view', () => {
  test('test footer add button and when total saving is more than 0', () => {
    const props = {
      onPress: jest.fn(),
      totalSaving: 300,
    };
    const {getByTestId} = render(<FooterScreenView {...props} />);

    const node = getByTestId('onPressButton');

    expect(node).toBeTruthy();
    fireEvent.press(node);
  });

  test('test texts of the component and when total saving is less than 0', () => {
    const props = {
      onPress: jest.fn(),
      totalSaving: -1,
    };
    const {getByText} = render(<FooterScreenView {...props} />);

    const node = getByText('Saving');

    expect(node.props.children).toBe('Saving');
  });
});
