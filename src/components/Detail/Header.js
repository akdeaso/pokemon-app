import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {capitalize} from 'lodash';
import getColorByPokemonType from '../../helpers/getColorByPokemonType';
import {ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {navigate} from '../../helpers/navigation';

const Header = props => {
  const {name, order, image, type} = props;
  const color = getColorByPokemonType(type);
  const bgStyle = [{backgroundColor: color, ...styles.bg}];
  return (
    <>
      <View style={bgStyle} />
      <TouchableOpacity
        onPress={() => {
          navigate('Home');
        }}>
        <Icon name="arrow-left" color="#fff" size={20} style={styles.back} />
      </TouchableOpacity>
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
      </SafeAreaView>
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
});
