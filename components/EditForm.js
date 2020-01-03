import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

export default class EditForm extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Input
                    inputStyle={styles.inputStyle}
                    placeholder='Locate'
                    leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
                />
                <Input
                    inputStyle={styles.inputStyle}
                    placeholder='Material'
                    leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
                />
                 <Input
                    inputStyle={styles.inputStyle}
                    placeholder='Date'
                    leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
                />
               <View style={styles.btnContainer}>
               <Button
                    title="Edit"
                    type="outline"
                />
               </View>
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