import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Products from './Components/Products/Products';

const App = () => {
    const [name, setName] = useState('name');
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Hello </Text>
            <Text style={{ ...styles.text, color: 'green' }}> Numan </Text>
            <Text style={styles.text}> Ahmed </Text>
            <StatusBar style="auto" />
        </View >
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'skyblue',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    text: {
        height: 100,
        width: 100,
        borderWidth: 3,
        color: 'red',
        backgroundColor: 'gray',
        margin: 5,
        textAlign: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 20
    }
});
