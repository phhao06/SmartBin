import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import BackyardImg from '../assets/backyard.jpg'
export default function BinList(props) {
    const { bin, onPress } = props;
    let statusBin
    if(Boolean(bin.status)){
        statusBin="Full"
    }else{
        statusBin="Empty"
    }
    return (
        
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.container}>
                <Image source={BackyardImg} style={styles.img}></Image>
                <Text style={styles.title}>{bin.locate}</Text>
                <Text style={styles.status}>{statusBin}
                    </Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    img: {
        height: 128,
        width: 200
    },
    title: {
        textTransform: "capitalize",
        marginBottom: 8,
        fontSize: 26,
        fontWeight: '600',
    },
    status: {
        textTransform: 'capitalize',
        fontSize: 20,
        fontWeight: '400'
    },
    container: {
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
    },
    item: {
        padding: 16
    }
})