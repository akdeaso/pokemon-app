import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, Platform} from 'react-native';
import PokemonCard from './PokemonCard';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function PokemonList(props) {
  const {loadPokemons, pokemons} = props;

  const loadMore = () => {
    loadPokemons();
  };

  return (
    <SafeAreaView>
      <FlatList
        data={pokemons}
        numColumns={2}
        keyExtractor={pokemon => pokemon.id}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        contentContainerStyle={styles.flatListContentContainer}
        onEndReached={loadMore}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === 'android' ? 5 : 0,
  },

  list: {
    marginBottom: 100,
  },
  alerta: {
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertaText: {
    fontSize: 17,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === 'android' ? 90 : 60,
  },
  textInputStyle: {
    height: 40,
    margin: 12,
    marginLeft: 0,
    marginTop: 0,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: '60%',
  },

  search: {
    flexDirection: 'row',
    marginBottom: 12,
    marginTop: 25,
    height: 40,
    width: '100%',
    justifyContent: 'space-evenly',
  },
  aviso: {
    width: '100%',
    height: 300,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
