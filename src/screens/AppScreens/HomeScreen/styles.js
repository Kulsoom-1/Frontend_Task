import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../utils/constants';

const styles = StyleSheet.create({
  statusText: {
    fontSize: 12,
    color: 'black',
    fontWeight: '500'
  },
  textContainer: {
    alignSelf: 'flex-end',
    borderRadius: 20,
    marginTop: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: 'red'
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageContainer: {
    height: 80,
    width: 80,
    borderRadius: 200,
    resizeMode: 'contain',
    backgroundColor: '#efefef',
    borderWidth: 0.5,
    borderColor: '#e2e2e2'
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 16
  },
  dateText: {
    fontSize: 10,
    marginTop: 10,
    fontWeight: 'bold'
  },
  mainTab: {
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#dfdfe0'
  },
  deviceTab: {
    flex: .5,
    paddingVertical: 5,

    alignItems: 'center',

    marginLeft: 0,
  },
  userTab: {
    flex: .5,
    paddingVertical: 5,
    alignItems: 'center',
  },
  headingText: {
    color: 'black',
    fontWeight: '500'
  }
});

export default styles;
