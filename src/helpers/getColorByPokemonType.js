import {POKEMON_TYPE_COLORS} from './colors';

const getColorByPokemonType = type => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorByPokemonType;
