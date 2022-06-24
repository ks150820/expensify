import React from 'react';
import {render} from '../../../../../../testing/test-utils';
import ChipScreen from '../chip-screen';

describe('chip-screen', () => {
  test('test chip screen component', () => {
    const props = {
      title: 'expense',
      rupees: 200,
      iconName: 'add',
      color: '#fff',
      bgColor: '#000',
    };
    const {getByText} = render(<ChipScreen {...props} />);

    const element = getByText('expense');

    expect(() => element).not.toThrow();
  });
});
