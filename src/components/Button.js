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
    onPress,
    style,
    isLoading,
    loadingColor,
    title,
    titleText,
    icon,
  } = props;
  return (
    <TouchableOpacity
      style={[
        styles.mainContainer,
        style,
      ]}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size="small" color={'white'} />
      ) : (
        <Animatable.View animation="bounceInRight" style={styles.buttonInner}>
          {icon && (
            <View style={styles.marginRight}>
              <Image style={styles.iconStyle} source={icon} />
            </View>
          )}
          <View style={{}}>
            <Text style={[styles.titleText, titleText]}>{title}</Text>
          </View>
        </Animatable.View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.THEME,
    borderRadius: 10,
    marginVertical: 3,
  },
  marginRight: {
    marginRight: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    marginRight: '2%',
    width: 20,
    height: 20,
  },
});

export default Button;
