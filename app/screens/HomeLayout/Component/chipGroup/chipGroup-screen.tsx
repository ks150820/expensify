import React from 'react';

import ChipGroupScreenView from './chipGroup-screen-view';

/**
 * @param {income,expense} // passing total income and expense
 */
const ChipGroupScreen: React.FC<ChipGroupProps> = ({income, expense}) => {
  return <ChipGroupScreenView income={income} expense={expense} />;
};

export default ChipGroupScreen;
