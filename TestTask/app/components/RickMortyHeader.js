import {View, Text, StyleSheet} from 'react-native';

export default function RickMortyHeader(props) {
    return (
        <View style={headerStyles.container} >
            <Text style={headerStyles.textItem}>{props.text}</Text>
        </View>
    )
}

const headerStyles = StyleSheet.create({
    container: {
        flex: 0.15, 
        backgroundColor: 'black',
    },
    textItem: {
        padding: 40,
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
    },
})