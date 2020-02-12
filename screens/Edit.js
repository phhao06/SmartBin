import React, { Component } from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
import EditForm from '../components/EditForm';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { db } from '../config';

// function updateData(bin,uuid){
//     db.ref("bins/"+uuid).update({
//         locate : bin.locate,
//         date: bin.date,
//         description: bin.description
//     })
//     console.log("Chinh sua thanh cong")
//}
export default class Edit extends Component{
    static navigationOptions = {
        title: 'Edit'
    }
 
    render() {
        const { navigation } = this.props;
        let uid = navigation.getParam('id')
        console.log(uid)
        return (
            <View style={styles.container}>
            <EditForm message={uid}/>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    inputStyle: {
        padding: 20
    },
    btnContainer: {
        paddingTop: 50
    }
});