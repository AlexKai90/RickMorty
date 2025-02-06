import {View, Text, StyleSheet} from 'react-native';
import { Link } from 'expo-router';

export default function RickMortyFooter() {
    return (
        <View style={footerStyles.container} >
            <Link href=".." style={footerStyles.link}>Main</Link>
            <Link href="/settings" style={footerStyles.link}>Settings</Link>
            <Text style={footerStyles.textItem}> All rights reserved, Aleksey Sementsov 2025 </Text>
        </View>
    )
}

const footerStyles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row', 
        backgroundColor: 'black', 
        alignItems: 'center',
    },
    link: {
        fontSize: 24,
        textDecorationLine: 'underline',
        padding: 10,
        color: '#fff',
    },
    textItem: {
        padding: 10,
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        paddingLeft: '29%',
    },
})