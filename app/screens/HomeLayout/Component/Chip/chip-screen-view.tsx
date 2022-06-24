import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {chipStyles} from './chip-style';

/**
 * @param title header title
 * @param rupees amount to show
 * @param iconName change icon by passing iconName
 * @param color change color by passing color name
 * @param bgColor change background color by passing background color
 * @returns
 */
const ChipScreenView: React.FC<chipScreenViewProps> = ({
  title,
  rupees,
  iconName,
  color,
  bgColor,
}) => {
  return (
    <View style={{...chipStyles?.component, backgroundColor: color}}>
      <View style={{...chipStyles?.iconComponent, backgroundColor: bgColor}}>
        <Icon name={iconName} style={chipStyles?.icon} />
      </View>
      <View>
        <Text style={chipStyles.text}>{title}</Text>
        <Text style={chipStyles.text}>₹ {rupees}</Text>
      </View>
    </View>
  );
};

export default ChipScreenView;
