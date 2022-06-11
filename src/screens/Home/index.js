import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {BASE_URL} from '../../helpers/api';
import axios from 'axios';
import LoadingScreen from '../../components/Loading';
import PokemonList from '../../components/PokemonList';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    loadPokemons();
  }, [page]);

  const getPokemonsApiTotal = async () => {
    try {
      const url = `${BASE_URL}/pokemon?offset=${page}&limit=10`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  };

  const getPokemonDetailsByUrlApi = async url => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  };

  const loadPokemons = async () => {
    try {
      setLoading(true);
      const response = await getPokemonsApiTotal();
      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default,
        });
      }
      console.log([...pokemons]);
      console.log([...pokemonsArray]);
      setPokemons([...pokemons, ...pokemonsArray]);
      setLoading(false);
      console.log(pokemons);
    } catch (error) {
      console.error(error);
    }
  };

  // const getPokemons = async () => {
  //   try {
  //     setLoading(true);
  //     const res = await axios.get(`${BASE_URL}/pokemon?offset=${page}&limit=10`);
  //     setPokemon([...pokemon, ...res.data.results]);
  //     setLoading(false);
  //     console.log(pokemon, 'ini pokemon');
  //     console.log(res.data.results, 'ini data');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getMore = useCallback(() => {
    setPage(page + 10);
    console.log(page);
  }, [page]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <PokemonList pokemons={pokemons} loadPokemons={getMore} />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  flatList: {
    flexGrow: 1,
  },
});
