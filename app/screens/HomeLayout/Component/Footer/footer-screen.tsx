import React from 'react';

import FooterScreenView from './footer-screen-view';

type onPressType = () => void;

interface footerScreenProps {
  onPress: onPressType;
  totalSaving: number;
}

// type FooterScreenFunc = (props: footerScreenProps) => React.FC;

const Footer: React.FC<footerScreenProps> = ({onPress, totalSaving}) => {
  return <FooterScreenView onPress={onPress} totalSaving={totalSaving} />;
};

export default Footer;
