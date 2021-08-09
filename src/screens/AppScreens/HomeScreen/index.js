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
import UserItem from './UserItem';
import DeviceItem from './DeviceItem';
//....image import ...///
//....image import ...///
const HomeScreen = (props) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState('devices');
  const data = toggle == 'devices' ? [
    {
      "type":"lock",
      "attributes":{
        "name":"Home",
        "power_source":"alkaline_battery",
        "connected_at":"2019-04-10T08:02:36Z",
        "firmware_version":"5.01.181217.1",
        "serial_number":"AC000W001635336",
        "programming_code":"2806",
        "state":"locked",
        "model_number":"BG (LS-3i)"
      },
      "id":"457dd414-9661-4aad-8cf4-3fbd1aea2653"
    },
    {
      "type":"lock",
      "attributes":{
        "name":"Office",
        "power_source":"lithium_battery",
        "connected_at":"2019-05-18T17:00:51Z",
        "firmware_version":"5.01.181217.1",
        "serial_number":"AC000W001247822",
        "programming_code":"1993",
        "state":"unlocked",
        "model_number":"RG (LS-5i)"
      },
      "id":"1e25c504-bb7b-4f75-9a98-3bd90d63b802"
    }
  ] : [
    {
      "type":"access_guest",
      "attributes":{
        "name":"Ines Walter",
        "email":"example@email.com",
        "phone":null,
        "pin":"8248",
        "status":"current",
        "starts_at":"2019-07-22T20:58:22",
        "ends_at":"2019-07-29T20:58:22",
        "device_time_zone":"America/Denver"
      },
      "id":"1c65eb9c-0981-424b-a46e-9103a07f47f6"
    },
    {
      "type":"access_user",
      "attributes":{
        "name":"Brenda Lindgren",
        "email":null,
        "phone":null,
        "pin":"923358",
        "status":"current",
        "guest_source":null
      },
      "id":"6cea23f5-4b3c-4cab-8b14-3e0607bd8698"
    },
    {
      "type":"access_user",
      "attributes":{
        "name":"Kody Thiel",
        "email":null,
        "phone":null,
        "pin":"135810",
        "status":"current"
      },
      "id":"83c7bbd0-05da-43a6-8998-d46545cb8e1a"
    },
    {
      "type":"access_guest",
      "attributes":{
        "name":"Cyril Nolan IV",
        "email":null,
        "phone":null,
        "pin":"9347",
        "status":"current",
        "starts_at":"2019-07-22T20:58:23",
        "ends_at":"2019-07-27T20:58:23",
        "device_time_zone":"America/Denver"
      },
      "id":"c7175596-74c4-4cf9-8fc3-2e857d5be671"
    }
  ]
  useEffect(() => {
     dispatch(getDevices())
  }, [])

  return (
     <Container>
       <View style={styles.mainTab}>
        <TouchableOpacity onPress={() => setToggle('devices')} style={[styles.deviceTab, {borderRadius: toggle == 'devices' ? 10 : 0, backgroundColor: toggle == 'devices' ? 'white' : null,}]}>
          <Text style={styles.headingText}>Devices</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setToggle('users')} style={[styles.userTab, {backgroundColor: toggle == 'users' ? 'white' : null, borderRadius: toggle == 'users' ? 10 : 0, }]}>
          <Text style={[styles.headingText]}>Users</Text>
        </TouchableOpacity>
       </View>
       <FlatList
       showsVerticalScrollIndicator={false}
       data={data}
       contentContainerStyle={{flexGrow: 1}}
       renderItem={(item) => toggle == 'devices' ? <DeviceItem item={item} /> : <UserItem item={item}/>}/>
     </Container>
  );
};

export default HomeScreen;
