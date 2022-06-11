import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Characteristic = ({height, weight, species}) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Characteristic</Text>
      <View style={styles.block}>
        <View style={styles.blockTitle}>
          <Text style={styles.statName}>Height: </Text>
          <Text style={styles.statName}>Weight: </Text>
          <Text style={styles.statName}>Species: </Text>
        </View>
        <View style={styles.blockInfo}>
          <Text style={styles.number}>{height}</Text>
          <Text style={styles.number}>{weight}</Text>
          <Text style={styles.number}>{species}</Text>
        </View>
      </View>
    </View>
  );
};

export default Characteristic;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  blockTitle: {
    width: '30%',
  },
  statName: {
    fontSize: 12,
    color: '#6b6b6b',
    marginVertical: 3,
  },
  blockInfo: {
    width: '70%',
    flexDirection: 'column',
  },
  number: {
    marginVertical: 3,
    fontSize: 12,
  },
});
