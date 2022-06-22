import React from 'react';

import ChipScreenView from './chip-screen-view';

const ChipScreen: React.FC<chipScreenViewProps> = ({
  title,
  rupees,
  iconName,
  color,
  bgColor,
}) => {
  return (
    <ChipScreenView
      title={title}
      rupees={rupees}
      iconName={iconName}
      color={color}
      bgColor={bgColor}
    />
  );
};

export default ChipScreen;
