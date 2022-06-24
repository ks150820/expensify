import React from 'react';
import {render} from '../../../../../../testing/test-utils';
import HeaderScreen from '../header-screen';

describe('header-screen', () => {
  test('test header component', () => {
    const {getByText} = render(<HeaderScreen name="Their" />);

    expect(getByText('Their').props.children).toBe('Their');
  });
});
