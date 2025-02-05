import {View, Text} from 'react-native';

export default function RickMortyHeader() {
    return (
        <View style={{ flex: 0.15, backgroundColor: 'black'}} >
            <Text 
                style={{
                    padding: 40,
                    fontSize: 30,
                    color: 'white',
                    textAlign: 'center',
                }}>
                Rick&Morty character list
            </Text>
        </View>
    )
}