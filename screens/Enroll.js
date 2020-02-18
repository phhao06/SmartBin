import React, { Component } from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
import EnrollForm from '../components/EnrollForm';

export default class Enroll extends Component{
    static navigationOptions = {
        title: 'Enroll'
    }

    render() {
        const { navigation } = this.props
        return (
                <View>
                    <EnrollForm 
                        redirect={() => navigation.navigate('Home')}
                    />
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