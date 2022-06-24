import React from 'react';

import HeaderScreenView from './header-screen-view';

/**
 * @param name passing the name to display in the header
 */
const HeaderScreen: React.FC<Props> = ({name}) => {
  return <HeaderScreenView name={name} />;
};

export default HeaderScreen;
