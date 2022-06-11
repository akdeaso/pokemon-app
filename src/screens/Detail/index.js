import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BASE_URL} from '../../helpers/api';
import axios from 'axios';
import Header from '../../components/Detail/Header';
import Type from '../../components/Detail/Type';
import Stats from '../../components/Detail/Stats';
import Characteristic from '../../components/Detail/Characteristic';
import Abilities from '../../components/Detail/Abilities';
import {ms} from 'react-native-size-matters';

const Detail = ({route}) => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [types, setTypes] = useState('');
  const [order, setOrder] = useState('');
  const [stats, setStats] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [species, setSpecies] = useState('');
  const [ability1, setAbility1] = useState('');
  const [ability2, setAbility2] = useState('');

  useEffect(() => {
    getPokemonDetail();
    getPokemonType();
  }, []);

  const getPokemonDetail = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/pokemon/${route.params.id}`);
      setImage(res.data.sprites.other['official-artwork'].front_default);
      setName(res.data.name);
      setOrder(res.data.order);
      setStats(res.data.stats);
      setHeight(res.data.height);
      setWeight(res.data.weight);
      setSpecies(res.data.species.name);
      setAbility1(res.data.abilities[0].ability.name);
      if (res.data.abilities[1]) {
        setAbility2(res.data.abilities[1].ability.name);
      }
      console.log(res.data, 'ini data');
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemonType = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/pokemon-form/${route.params.id}`,
      );
      setType(res.data.types[0].type.name);
      setTypes(res.data.types);
    } catch (error) {
      console.log(error);
    }
  };

  const catchPokemon = () => {
    const catchRate = Math.floor(Math.random() * 10);
    console.log(catchRate);
    if (catchRate >= 6) {
      Alert.alert(`${name} successfuly catched!`);
    } else {
      Alert.alert(`${name} ran away!`);
    }
  };

  return (
    <ScrollView>
      <Header name={name} type={type} image={image} order={order} />
      <Type types={types} />
      <Abilities ability1={ability1} ability2={ability2} />
      <Characteristic height={height} weight={weight} species={species} />
      <Stats stats={stats} />
      <View>
        <TouchableOpacity onPress={catchPokemon}>
          <View style={styles.button}>
            <Text style={styles.txtButton}>Catch!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: ms(30),
    paddingVertical: ms(5),
    borderRadius: ms(20),
    marginHorizontal: ms(10),
    backgroundColor: '#4632A1',
    marginBottom: ms(20),
    marginTop: ms(10),
    width: ms(150),
    alignSelf: 'center',
  },
  txtButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});
