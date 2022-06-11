import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {memo} from 'react';
import {navigate} from '../helpers/navigation';
import {ms} from 'react-native-size-matters';

const Pokemon = ({id, name, type1, type2, image, item}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigate('Detail', {DataPoke: name})}>
        <Text style={styles.id}>{id}</Text>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.type1}>
          <Text>{type1}</Text>
        </View>
        <View style={styles.type2}>
          <Text>{type2}</Text>
        </View>

        <View style={styles.bgImg}>
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
            }}
            style={styles.img}
          />
          <View style={styles.bgImgRound}></View>
          <View style={styles.bgImgSquare}></View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default memo(Pokemon);

const styles = StyleSheet.create({
  card: {
    borderRadius: ms(10),
    backgroundColor: 'blue',
    width: ms(330),
    height: ms(90),
    marginLeft: ms(10),
    marginTop: ms(10),
  },
  bgImg: {
    top: ms(-82),
    left: ms(10),
  },
  bgImgRound: {
    backgroundColor: '#4632A1',
    borderRadius: ms(60),
    width: ms(90),
    height: ms(90),
    top: ms(-19),
    left: ms(208),
  },
  bgImgSquare: {
    backgroundColor: '#4632A1',
    width: ms(80),
    height: ms(92),
    left: ms(240),
    top: ms(-110),
    borderRadius: ms(10),
  },
  id: {
    fontSize: ms(16),
    left: ms(30),
    top: ms(14),
  },
  name: {
    fontSize: ms(20),
    left: ms(90),
    top: ms(-10),
  },
  type1: {
    width: ms(100),
    height: ms(26),
    borderWidth: ms(1),
    borderRadius: ms(10),
    justifyContent: 'center',
    alignItems: 'center',
    color: 'grey',
    borderColor: 'grey',
    left: ms(10),
    top: ms(4),
  },
  type2: {
    width: ms(100),
    height: ms(26),
    borderWidth: ms(1),
    borderRadius: ms(10),
    justifyContent: 'center',
    alignItems: 'center',
    color: 'grey',
    borderColor: 'black',
    left: ms(116),
    top: ms(-22),
  },
  img: {
    position: 'absolute',
    width: ms(100),
    height: ms(100),
    left: ms(220),
    top: ms(-26),
    zIndex: 1,
  },
});
