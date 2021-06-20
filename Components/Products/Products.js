import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Products = ({ name, setName }) => {
    return (
        <>
            <Text>{name}</Text>
            {/* <Button onPress={() => setName('Numan Ahmed')}>Change Name</Button> */}
        </>
    );
}

export default Products;
