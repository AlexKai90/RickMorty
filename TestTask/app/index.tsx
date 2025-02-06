import { Text, View, StyleSheet } from "react-native";

import RickMortyHeader from './components/RickMortyHeader';
import RickMortyFooter from './components/RickMortyFooter';

export default function Index() {
  return (
    <>
      <View style={indexStyles.container}>
        <RickMortyHeader text="Rick&Morty character list" />
      </View>
      
      <View>
        <RickMortyFooter />
      </View>
    
    </>
  );
}

const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  }
})