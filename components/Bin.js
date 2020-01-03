import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default function Bin(props){
    const { locate, status, onPress } = props;
    return (
        <View style={styles.shadow}>
            <View style={styles.container}>
                <Image styles={styles.img} source={require('../assets/backyard.jpg')} />
                <View style={styles.info}>
                    <Text>Locate</Text>
                    <View style={styles.infoRow}>
                        <Text style={styles.statusBin}>Status</Text>
                        <TouchableOpacity onPress={onPress}>
                            <Text style={styles.infoText}> Edit </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    infoText: {
        textTransform: 'capitalize',
        fontSize: 16,
        color: '#2f95d7',
    },
    shadow: {
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
    },
    container: {
        marginBottom: 20,
        borderRadius: 4,
        backgroundColor: '#FFF',
        overflow: 'hidden',
        padding: 16,

    },
    wrapper: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        padding: 8
    },
    img: {
        height: 150,
        width: 200,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    name: {
        fontSize: 16,
        marginBottom: 8,
    },
    infoRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    statusBin: {
        fontSize: 16,
        color: '#777',
        flex: 1
    }
});