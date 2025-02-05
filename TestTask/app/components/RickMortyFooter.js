import {View, Text} from 'react-native';
import { Link } from 'expo-router';

export default function RickMortyFooter() {
    return (
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'black', alignItems: 'center'}} >
            <Link href=".." 
                style={{ 
                fontSize: 24,
                textDecorationLine: 'underline',
                padding: 10,
                color: '#fff',}}>
                    Main
            </Link>
            <Link href="/settings" 
                style={{ 
                fontSize: 24,
                textDecorationLine: 'underline',
                padding: 10,
                color: '#fff',}}>
                    Settings
            </Link>
            <Text 
                style={{
                    padding: 10,
                    fontSize: 24,
                    color: 'white',
                    textAlign: 'center',
                    paddingLeft: '29%',
                }}>
                All rights reserved, Aleksey Sementsov 2025
            </Text>
        </View>
    )
}