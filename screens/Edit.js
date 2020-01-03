import React, { Component } from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
import EditForm from '../components/EditForm';

export default class Edit extends Component{
    static navigationOptions = {
        title: 'Edit'
    }

    render() {
        return (
            <View style={styles.container}>
                <EditForm />
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
  });