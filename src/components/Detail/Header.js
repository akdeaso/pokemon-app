import {
  Animated,
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {capitalize} from 'lodash';
import getColorByPokemonType from '../../helpers/getColorByPokemonType';
import {ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {navigate} from '../../helpers/navigation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const Header = props => {
  const {name, order, image, type} = props;
  const color = getColorByPokemonType(type);
  const bgStyle = [{backgroundColor: color, ...styles.bg}];
  const windowHeight = Dimensions.get('window').height;
  const popAnim = useRef(new Animated.Value(windowHeight * -1)).current;
  const [status, setStatus] = useState(null);

  const popIn = () => {
    Animated.timing(popAnim, {
      toValue: windowHeight * 0.35 * -1,
      duration: 300,
      useNativeDriver: true,
    }).start(popOut());
  };

  const popOut = () => {
    setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: windowHeight * -1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 2000);
  };

  const instantPopOut = () => {
    Animated.timing(popAnim, {
      toValue: windowHeight * -1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const catchPokemon = () => {
    const catchRate = Math.floor(Math.random() * 10);
    console.log(catchRate);
    if (catchRate >= 6) {
      setStatus('success');
      popIn();
    } else {
      setStatus('fail');
      popIn();
    }
  };
  return (
    <>
      <View style={bgStyle} />
      <View>
        <TouchableOpacity
          onPress={() => {
            navigate('Home');
          }}>
          <Icon name="arrow-left" color="#fff" size={20} style={styles.back} />
        </TouchableOpacity>
      </View>
      <StatusBar
        animated={true}
        backgroundColor={color}
        barStyle="light-content"
      />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{uri: image ? image : null}} style={styles.image} />
        </View>
        <TouchableOpacity onPress={catchPokemon}>
          <View style={styles.button}>
            <Text style={styles.txtButton}>Catch!</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
      <Animated.View
        style={[
          styles.toastContainer,
          {
            transform: [{translateY: popAnim}],
          },
        ]}>
        <View style={styles.toastRow}>
          <AntDesign
            name={status === 'success' ? 'checkcircleo' : 'closecircleo'}
            size={24}
            color={status === 'success' ? '#6dcf81' : '#bf6060'}
          />
          <View style={styles.toastText}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>
              {status === 'success' ? 'Success!' : 'Failed!'}
            </Text>
            <Text style={{fontSize: 12}}>
              {status === 'success'
                ? `You catched ${name}`
                : `You let ${name} ran away`}
            </Text>
          </View>
          <TouchableOpacity onPress={instantPopOut}>
            <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: ms(350),
    position: 'absolute',
    borderBottomEndRadius: ms(100),
    borderBottomLeftRadius: ms(100),
  },
  content: {
    marginHorizontal: ms(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 27,
  },
  order: {
    color: '#fff',
    fontWeight: 'bold',
  },
  contentImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: ms(250),
    height: ms(250),
    resizeMode: 'contain',
  },
  back: {
    marginTop: ms(20),
    marginBottom: ms(10),
    marginLeft: ms(20),
  },
  button: {
    paddingHorizontal: ms(30),
    paddingVertical: ms(5),
    borderRadius: ms(20),
    marginHorizontal: ms(10),
    backgroundColor: '#4632A1',
    marginTop: ms(10),
    width: ms(150),
    alignSelf: 'center',
  },
  txtButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  toastContainer: {
    height: 60,
    width: 350,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  toastRow: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  toastText: {
    width: '70%',
    padding: 2,
  },
});
