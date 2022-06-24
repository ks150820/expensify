import React from 'react';

import ChipScreenView from './chip-screen-view';

/**
 * @param title header title
 * @param rupees amount to show
 * @param iconName change icon by passing iconName
 * @param color change color by passing color name
 * @param bgColor change background color by passing background color
 * @returns
 */
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
