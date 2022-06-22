import React from 'react';

import HeaderScreenView from './header-screen-view';

const HeaderScreen: React.FC<Props> = ({name}) => {
  return <HeaderScreenView name={name} />;
};

export default HeaderScreen;
