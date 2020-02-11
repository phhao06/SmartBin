import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { db } from '../config';

function addBin(data) {
    db.ref('bins/').push({
        id: data.id,
        locate : data.locate,
        date: data.date,
        description: data.description,
    });
};
export default class EnrollForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                id: '',
                locate: '',
                date: '',
                description: ''
            }
    }

    
    handleSubmit = () => {
        let bin = {
            id: this.state.id,
            locate: this.state.locate,
            date: this.state.date,
            description: this.state.description
        }
        console.log(bin);
        addBin(bin);
        console.log("Saving....")
        //Alert.alert('Item saved successfully');
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Input
                        inputStyle={styles.inputStyle}
                        placeholder='Bin ID'
                        onChangeText={(id) =>this.setState({id: id})}
                        leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
                    />
                </View>
                <View>
                    <Input
                        inputStyle={styles.inputStyle}
                        placeholder='Locate'
                        onChangeText={(locate) =>this.setState({locate: locate})}
                        leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
                    />
                </View>
                <View>
                    <Input
                        inputStyle={styles.inputStyle}
                        placeholder='Date'
                        onChangeText={(date) =>this.setState({date})}
                        leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
                    />
                </View>
                <View>
                    <Input
                        inputStyle={styles.inputStyle}
                        placeholder='Description'
                        onChangeText={(description) =>this.setState({description})}
                        leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
                    />
                </View>
                <View style={styles.btnContainer}>
                    <Text>
                        {this.state.locate}
                    </Text>
                    <Text>
                        {this.state.date}
                    </Text>
                    <Text>
                        {this.state.description}
                    </Text>
                <Button
                    title="Enroll"
                    type="outline"
                    onPress={this.handleSubmit}
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
        padding: 50
    }
});