import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View>
      <Text style={styles.container}>Header</Text>
    </View>
  );
};

export function HeaderSubtitle() {
  return (
    <View>
      <Text style={styles.subtitle}>Header Subtitle</Text>
    </View>
  );
}
export function HeaderSubtitle2() {
  return (
    <View>
      <Text style={styles.subtitle}>Header Subtitle</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});
