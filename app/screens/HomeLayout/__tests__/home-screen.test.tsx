import React from 'react';
import {render} from '../../../../testing/test-utils';
import HomeScreen from '../home-screen';

describe('home-screen', () => {
  test('test home screen component', () => {
    const props = {
      navigation: {},
      route: {},
    };
    const {} = render(<HomeScreen {...props} />);
  });
});
