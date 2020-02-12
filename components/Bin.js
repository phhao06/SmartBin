import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Bin(props) {
    const { bin, onPress } = props;
    return (
        <Card
            title={bin.locate}
            titleStyle={styles.title}
            image={require('../assets/backyard.jpg')} style={styles.img}>
            <Text style={styles.infoText}>
                {bin.id}
            </Text>
            <Text style={styles.infoText}>
                Status: Empty
            </Text>
            <Text style={styles.infoText}>
                {bin.date}
            </Text>
            <View style={styles.shadow}>
            <Text >
                {bin.description}
            </Text>
            </View>

            <View style={styles.btnRow}>
                <Button
                    icon={<Icon name='edit' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='Edit'
                    onPress={onPress}
                />
                <Button
                    icon={<Icon name='edit' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='Delete'
                    onPress={() => { Alert.alert("Deleted") }} />
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    infoText: {
        textTransform: 'capitalize',
        fontSize: 26,
        color: '#3299a8',
        marginBottom: 10
    },
    shadow: {
        borderRadius: 4,
        borderColor: '#d6d7da',
        backgroundColor:'#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        padding: 30
    },
    container: {
        marginBottom: 20,
        borderRadius: 4,
        backgroundColor: '#FFF',
        overflow: 'hidden',
        padding: 16,

    },
    img: {
        height: 150,
        width: 200,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    infoRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    btnRow: {
        paddingTop: 30,
        flexDirection: "row-reverse",
        alignItems: "center",
    },
    title: {
        fontSize: 36,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
});
