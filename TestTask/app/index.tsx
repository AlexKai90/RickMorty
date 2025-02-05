import { Text, View } from "react-native";

import RickMortyHeader from './components/RickMortyHeader';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
      }}
    >
      <RickMortyHeader />
    </View>
  );
}
