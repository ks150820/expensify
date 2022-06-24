import React from 'react';
import {render} from '../../../../../../testing/test-utils';
import ChipGroupScreenView from '../chipGroup-screen-view';

describe('chipGroup-screen-view', () => {
  test('test chip group component', () => {
    const props = {
      income: 200,
      expense: 300,
    };
    const {getByText} = render(<ChipGroupScreenView {...props} />);

    expect(() => getByText('income')).not.toThrow();
    expect(() => getByText('expense')).not.toThrow();
  });
});
