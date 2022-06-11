import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {capitalize} from 'lodash';
import getColorByPokemonType from '../helpers/getColorByPokemonType';
import {navigate} from '../helpers/navigation';
import {ms} from 'react-native-size-matters';

export default function PokemonCard(props) {
  const {pokemon} = props;

  const pokemonColor = getColorByPokemonType(pokemon.type);
  const bgStyles = {backgroundColor: pokemonColor, ...styles.bgStyles};

  const goToPokemon = () => {
    navigate('Detail', {id: pokemon.id});
  };

  return (
    <TouchableOpacity onPress={goToPokemon} style={{flex: 1}}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{uri: pokemon.image}} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: ms(130),
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#fff',
    fontSize: 11,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
});
