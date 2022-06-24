import React from 'react';
import {render} from '../../../../../../testing/test-utils';
import ChipGroupScreen from '../chipGroup-screen';

describe('chipGroup-screen', () => {
  test('test chip group screen component', () => {
    const props = {
      income: 200,
      expense: 300,
    };
    const {getByText} = render(<ChipGroupScreen {...props} />);

    expect(getByText('income').props.children).toBe('income');
    expect(getByText('expense').props.children).toBe('expense');
  });
});
