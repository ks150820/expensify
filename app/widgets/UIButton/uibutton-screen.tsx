import React from 'react';

import UIButtonScreenView from './uibutton-screen-view';

type onPress = () => void;

interface UTIButtonScreenProps {
  onPress: onPress;
}

const UIButtonScreen: React.FC<UTIButtonScreenProps> = ({onPress}) => {
  return <UIButtonScreenView onPress={onPress} />;
};

export default UIButtonScreen;
