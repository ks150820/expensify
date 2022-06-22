import React from 'react';
import {View, Text} from 'react-native';

import {footerStyle} from './Footer-style';
import UIButton from '../../../../widgets/UIButton';

type totalSavingKey = () => void;

interface footerScreenViewProps {
  onPress: totalSavingKey;
  totalSaving: number;
}

type FooterScreenViewFunc = (props: footerScreenViewProps) => JSX.Element;

const FooterScreenView: FooterScreenViewFunc = ({onPress, totalSaving}) => {
  return (
    <View style={footerStyle?.component}>
      <UIButton onPress={onPress} />
      <View
        style={
          totalSaving < 0
            ? [footerStyle?.errorComponent, footerStyle?.commonSavingComponent]
            : [footerStyle?.savingComponent, footerStyle?.commonSavingComponent]
        }>
        <Text style={footerStyle?.text}>Saving</Text>
        <Text style={footerStyle?.text}>₹ {totalSaving}</Text>
      </View>
    </View>
  );
};

export default FooterScreenView;
