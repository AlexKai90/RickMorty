import { Text, View } from "react-native";

import RickMortyHeader from './components/RickMortyHeader';
import RickMortyFooter from './components/RickMortyFooter';

export default function Index() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
        <RickMortyHeader text="Rick&Morty character list" />
      </View>
      
      <View>
        <RickMortyFooter />
      </View>
    
    </>
  );
}

