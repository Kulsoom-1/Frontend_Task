import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useSelector} from 'react-redux';

const Container = (props) => {
  const appState = useSelector((state) => state.app);

  return (
    <View
      style={[
        styles.mainView,
        props.style,
      ]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#eeeeee',
    paddingHorizontal: 20,
    flex: 1
  },
});

export default Container;
