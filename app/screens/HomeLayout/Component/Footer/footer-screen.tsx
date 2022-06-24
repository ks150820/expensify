import React from 'react';

import FooterScreenView from './footer-screen-view';

type onPressType = () => void;

interface footerScreenProps {
  onPress: onPressType;
  totalSaving: number;
}

// type FooterScreenFunc = (props: footerScreenProps) => React.FC;
/**
 * @param onPress is a method responsible for navigating into screens, when user will press the add button
 * @param totalSaving it is total saving of user
 * @returns this component render the footer-screen-view component
 */
const Footer: React.FC<footerScreenProps> = ({onPress, totalSaving}) => {
  return <FooterScreenView onPress={onPress} totalSaving={totalSaving} />;
};

export default Footer;
