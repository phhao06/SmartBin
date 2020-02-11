import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { db } from '../config';

function updateBin(data) {
    db.ref("bins/").child(data.id).update({
        locate : data.locate,
        date: data.date,
        description: data.description
    })
}


export default class EditForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            locate: '',
            date: '',
            description: ''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Input
                    inputStyle={styles.inputStyle}
                    placeholder='Locate'
                    onChangeText={(locate) =>this.setState({locate})}
                    
                    editable={true}
                    leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
                />
                <Input
                    inputStyle={styles.inputStyle}
                    placeholder='Date'
                    onChangeText={(date) =>this.setState({date})}
                    value={this.state.date}
                    leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
                />
                 <Input
                    inputStyle={styles.inputStyle}
                    placeholder='Description'
                    leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
                />
               <View style={styles.btnContainer}>
                <Text>
                    {this.state.locate}
                </Text>
               <Button
                    title="Edit"
                    onpress ={() =>{
                       
                    }}
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