import React from 'react';
import { View, StyleSheet, Text, Image,  Alert } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { db } from '../config';

function WarnAlert(id,cb) {
    Alert.alert(
        'Warning',
        'Are you sure?',
        [
          
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () =>  db.ref('bins/'+id).remove().then(cb)},
        ],
        {cancelable: false},
      );
}
export default function Bin(props) {
    const { bin, onPress, redirectHome } = props;
    console.log(bin.uuid)
    console.log(bin.image)
    return (
        <Card
            title={bin.locate}
            titleStyle={styles.title}
            >
            <View style={styles.imgContainer}>
                <Image source = {{uri: bin.image}} style={styles.img}/>
            </View>
            <Text style={styles.infoText}>
                {bin.id}
            </Text>
            <Text style={styles.infoText}>
                {bin.status}
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
                    onPress={() =>WarnAlert(bin.uuid,redirectHome)} />
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
        width: 300,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        resizeMode: 'contain',
        alignItems: 'center'
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems:'center'
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
