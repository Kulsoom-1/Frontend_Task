import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import * as Animatable from 'react-native-animatable';
//////////////////////////////////////////////////////
import {colors} from '../utils/constants';
import Text from './Text';
//////////////////////////////////////////////////////

const Button = (props) => {
  const appState = useSelector((state) => state.app);

  const {
    style,
    color,
    title
  } = props;

  return (
      <View style={[
          styles.mainContainer,
          style,
          {backgroundColor: color}
        ]}>
        <Text>
          {title}
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: 'flex-end',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    fontSize: 12
  },
});

export default Button;
