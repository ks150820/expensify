import React from 'react';
import {View, Text} from 'react-native';

import {headerStyle} from './home-screen-header-style';

/**
 * @param name passing the name to display in the header
 */
const HeaderScreenView: React.FC<Props> = ({name}) => {
  return (
    <View style={headerStyle?.component}>
      <View>
        <Text style={headerStyle.text}>Hello,</Text>
        <Text style={[headerStyle.text, headerStyle.name]}>{name}</Text>
      </View>
      <View>
        {/* <Image
          source={require('../../../../assets/images/avatar.png')}
          style={headerStyle.image}
          resizeMode="cover"
        /> */}
      </View>
    </View>
  );
};

export default HeaderScreenView;
