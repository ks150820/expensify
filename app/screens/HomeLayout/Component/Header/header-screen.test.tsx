import React from 'react';
// import {render} from '../../../../../testing/test-utils';
import {render} from '@testing-library/react-native';
import HeaderScreen from './header-screen';

describe('header-screen', () => {
  test('test header component', () => {
    render(<HeaderScreen name="kapil" />);
  });
});

// // const { defaults: tsjPreset } = require('ts-jest/presets');

// module.exports = {
//   preset: 'react-native',
//   globals: {
//     'ts-jest': {
//       tsconfig: 'tsconfig.spec.json',
//     },
//   },
//   transform: {
//     '^.+\\.jsx$': 'babel-jest',
//     '^.+\\.tsx?$': 'ts-jest',
//   },
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
// };
