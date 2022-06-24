import React from 'react';
import {render} from '../../../../../../testing/test-utils';
import EmptyView from '../emptyView-screen';

describe('emptyView-screen', () => {
  test('test empty view component', () => {
    const {getByText} = render(<EmptyView />);

    // eslint-disable-next-line jest/valid-expect
    expect(getByText(/Your Expense are zero/i).props.children);
  });
});
