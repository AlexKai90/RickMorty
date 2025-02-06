import { Text, View, StyleSheet } from "react-native";
import RickMortyHeader from './components/RickMortyHeader';
import RickMortyFooter from './components/RickMortyFooter';

export default function Index() {
  return (
    <>
      <View style={settingsStyles.container}>
        <RickMortyHeader text="Settings" />
      </View>
      
      <View>
        <RickMortyFooter />
      </View>
    
    </>
  );
}

const settingsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#495E57',
    }
})

