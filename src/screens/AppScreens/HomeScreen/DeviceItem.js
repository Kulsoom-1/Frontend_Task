import React, {useRef, useEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Text, Cards, Container, StatusButton} from '../../../components';
import styles from './styles';
import {getDevices} from '@redux/actions/AppActions';
import {colors} from '../../../utils/constants';
import {validateForm} from '../../../utils/functions';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { Switch } from 'react-native-paper';
import moment from 'moment'
import UserItem from './UserItem'
//....image import ...///
//....image import ...///
const DeviceItem = ({item}) => {
  const dispatch = useDispatch();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  let status = item.item.attributes.state == 'locked' ? true : false
  return (
    <Cards>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer} />
        <View style={styles.infoContainer}>
          <Text style={styles.nameText}>{item.item.attributes.name}</Text>
          <Text>{item.item.attributes.model_number}</Text>
          <Text>{}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, alignItems: 'center'}}>
            <Switch color={status || isSwitchOn ? 'green' : 'red'} value={status || isSwitchOn} onValueChange={onToggleSwitch} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name={status || isSwitchOn ? "lock-closed" : "lock-open"} size={25} color={status || isSwitchOn ? 'green' : "red"} />
              <Text style={{fontSize: 16, fontWeight: '500', color: status || isSwitchOn ? 'green' : 'red' }}>{isSwitchOn ? 'Locked' : 'Unlocked'}</Text>
            </View>
          </View>
        </View>
      </View>
    </Cards>
  );
};

export default DeviceItem;
