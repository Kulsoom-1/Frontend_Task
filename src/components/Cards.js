import React from 'react';
import {StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useSelector} from 'react-redux';

const Cards = (props) => {
  const appState = useSelector((state) => state.app);

  return (
    <Animatable.View
      delay={500}
      animation="fadeInRight"
      style={[
        styles.mainCardView,
        props.card,
      ]}>
      {props.children}
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  mainCardView: {
    borderRadius: 0,
    borderColor: '#0d0d12',
    backgroundColor: 'white',
    shadowOpacity: 0.2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 2,
    shadowOffset: {width: 0, height: 0},
    marginVertical: 10,
    elevation: 5,
  },
});

export default Cards;
