import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Products from './Components/Products/Products';

const App = () => {
    const [name, setName] = useState('Numan');
    const [newname, setNewName] = useState('N');
    return (
        <View style={styles.container}>
            <Text style={styles.text}> {name} </Text>
            <TextInput
                style={{ fontSize: 30, height: 40 }}
                placeHolder='Type something'
                onChangeText={(text) => setNewName(text)}
            />

            <Button onPress={() => setName(newname)} title="Change Name" />

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

});
