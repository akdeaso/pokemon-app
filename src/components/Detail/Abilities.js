import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Abilities = ({ability1, ability2}) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Abilities</Text>
      <View style={styles.block}>
        <View>
          {ability2 ? (
            <Text style={styles.statName}>
              {ability1}, {ability2}
            </Text>
          ) : (
            <Text style={styles.statName}>{ability1}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default Abilities;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 10,
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
  statName: {
    fontSize: 12,
    color: '#6b6b6b',
    marginVertical: 3,
  },
  blockInfo: {
    width: '70%',
    flexDirection: 'column',
  },
});
