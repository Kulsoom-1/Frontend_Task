import React, {useRef, useEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Text, Cards, Container, StatusButton} from '../../../components';
import styles from './styles';
import {getUsers} from '@redux/actions/AppActions';
import {colors} from '../../../utils/constants';
import {validateForm} from '../../../utils/functions';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { Switch } from 'react-native-paper';
import moment from 'moment'
//....image import ...///
//....image import ...///
const HomeScreen = ({item}) => {
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(getUsers())
  }, [])

  let isUpcoming = moment(item.item.attributes.starts_at).isAfter();
  let isBefore = moment(item.item.attributes.starts_at).isBefore();
  let status = isUpcoming ? 'UPCOMING' : isBefore ? 'PASSED' : 'ACTIVE';
  let date = item.item.attributes.starts_at ? moment(item.item.attributes.starts_at).format('MMMM Do, h:mm a') + '-' + moment(item.item.attributes.ends_at).format('MMMM Do, h:mm a') : '';
  
  return (
    <Cards>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer} />
        <View style={styles.infoContainer}>
          <Text style={styles.nameText}>{item.item.attributes.name}</Text>
          <Text>{item.item.attributes.email}</Text>
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>
      <View style={[styles.textContainer, {backgroundColor: isUpcoming ? '#edee9f' : isBefore ? '#ff5722' : '#c5f6a7'}]}>
        <Text style={styles.statusText}>{status}</Text>
      </View>
    </Cards>
  );
};

export default HomeScreen;
