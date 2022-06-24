import React from 'react';
import {View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from './UIButtonScreenViewStyle';

type onPress = () => void;

interface uibuttonprops {
  onPress: onPress;
}

const UIButtonScreenView: React.FC<uibuttonprops> = ({onPress}) => {
  return (
    <Pressable onPress={onPress} testID="onPressButton">
      <View style={styles?.buttonComponent}>
        <Icon name="add" style={styles?.icon} />
      </View>
    </Pressable>
  );
};

export default UIButtonScreenView;
