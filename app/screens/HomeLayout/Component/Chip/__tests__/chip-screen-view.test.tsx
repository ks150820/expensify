import React from 'react';
import {render} from '../../../../../../testing/test-utils';
import ChipScreenView from '../chip-screen-view';

describe('chip-screen-view', () => {
  test('test chip screen view component', () => {
    const props = {
      title: 'income',
      rupees: 200,
      iconName: 'add',
      color: '#fff',
      bgColor: '#000',
    };
    const {getByText} = render(<ChipScreenView {...props} />);

    expect(getByText('income').props.children).toBe('income');
  });
});
