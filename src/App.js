import React, {useEffect, useState} from 'react';
import {StyleSheet, Appearance, View} from 'react-native';
import AppContainer from './utils/router';
import {Provider} from 'react-redux';
import {store} from './Redux/store';
import {setMode} from '@redux/actions/AppActions';

const App = () => {
  console.disableYellowBox = true;
  let subscription = null;

  useEffect(() => {
  }, []);

  return (
    <View style={styles.appContainer}>
      <Provider store={store}>
            <AppContainer />
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
