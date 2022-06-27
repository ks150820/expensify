import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './Navigation/MainNavigation';

const AppLayout: React.FC<{}> = ({}) => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default AppLayout;
