import React from 'react';
import {render} from '../../../../../../testing/test-utils';
import HeaderScreenView from '../header-screen-view';

describe('header-screen-view', () => {
  test('test header screen view component', () => {
    const {getByText} = render(<HeaderScreenView name="Their" />);

    expect(getByText('Their'));
  });
});
