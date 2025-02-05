import {View, Text} from 'react-native';

export default function RickMortyFooter() {
    return (
        <View style={{ flex: 1, backgroundColor: 'black'}} >
            <Text 
                style={{
                    padding: 10,
                    fontSize: 24,
                    color: 'white',
                    textAlign: 'center',
                }}>
                All rights reserved, Aleksey Sementsov 2025
            </Text>
        </View>
    )
}