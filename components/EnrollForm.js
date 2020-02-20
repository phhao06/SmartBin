import React from 'react';
import { View, StyleSheet, Image, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { db } from '../config';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const initState = {
    id: '',
    locate: '',
    date: '',
    description: '',
    status: false,
    image: ''
}
export default class EnrollForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = initState
    }
    reset() {
        this.setState(initState)
    }
    addBin(data, cb) {
        db.ref('bins/').push({
            id: data.id,
            locate: data.locate,
            date: data.date,
            description: data.description,
            status: data.status,
            image: data.image
        }).then(cb)//.then(this.reset());
    };

    handleSubmit = () => {
        const redirect = this.props.redirect
        console.log(redirect)
        let bin = {
            id: this.state.id,
            locate: this.state.locate,
            date: this.state.date,
            description: this.state.description,
            status: this.state.status,
            image: this.state.image
        }
        if (bin.id) {
            this.addBin(bin, redirect);
        } else {
            Alert.alert("Error Syntax")
        }

    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        console.log(result);

        if (!result.cancelled) {

            this.setState({ image: result.uri });
        }
    };
    takeImage = async () => {
        let { status } = await ImagePicker.requestCameraPermissionsAsync()
        console.log("Status: ", status);
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            base64: true
        });
        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    }

    render() {
        let uri = this.state.image
        //console.log(uri.split(","))
        return (
            <View style={styles.container}>
                <View style={styles.btnContainer}>
                    <Button
                        title="Choose Picture"
                        onPress={this.pickImage}
                        buttonStyle={styles.imgBtn}
                    />
                    <Button
                        title="Camera"
                        onPress={this.takeImage}
                        buttonStyle={styles.imgBtn}
                    />
                </View>

                <View style={{ paddingBottom: 10 }}>
                    <Image source={{ uri: uri }} style={styles.imgSelected} />
                </View>

                <View>
                    <Input
                        inputStyle={styles.inputStyle}
                        placeholder='Bin ID'
                        onChangeText={(id) => this.setState({ id: id })}
                        leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
                    />
                </View>
                <View>
                    <Input
                        inputStyle={styles.inputStyle}
                        placeholder='Locate'
                        onChangeText={(locate) => this.setState({ locate: locate })}
                        leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
                    />
                </View>
                <View>
                    <Input
                        inputStyle={styles.inputStyle}
                        placeholder='Date'
                        onChangeText={(date) => this.setState({ date })}
                        leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
                    />
                </View>
                <View>
                    <Input
                        inputStyle={styles.inputStyle}
                        placeholder='Description'
                        onChangeText={(description) => this.setState({ description })}
                        leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
                    />
                </View>

                <View style={styles.btnContainer}>
                    <Button
                        title="Enroll"
                        type="solid"
                        onPress={() => this.handleSubmit()}
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
        padding: 10
    },
    imgBtn: {
        height: 40,
        width: 120
    },
    imgSelected: {
        width: 128,
        height: 64
    }
});