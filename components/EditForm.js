import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { db } from '../config';
import * as ImagePicker from 'expo-image-picker';



export default class EditForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            locate: "",
            date: "",
            description: "",
            image: '../assets/icon.png'
        }
    }
    componentDidMount() {
        let currentComponent = this;
        const uid = this.props.message

        //console.log(uid)
        try {
            db.ref('SBins/' + uid).once('value', function (snapshot) {
                let fdata = snapshot.val()
                currentComponent.setState({
                    locate: fdata.locate,
                    date: fdata.date,
                    description: fdata.description
                })
            })
        } catch (err) {
            console.log(err);
        }
    }

    handleLocateInput(userInput) {
        if (userInput) {
            this.setState({ locate: userInput })
        }
    }
    handleDateInput(userInput) {
        if (userInput) {
            this.setState({ locate: userInput })
        }
    }
    handleDesInput(userInput) {
        if (userInput) {
            this.setState({ locate: userInput })
        }
    }
    // alertHandle() {
    //     console.log("onPress")
    //     Alert.alert(
    //         'Alert',
    //         'Chinh sua hoan tat',
    //         [
    //           {
    //             text: 'Close',
    //             onPress: () => console.log('Cancel Pressed'),
    //             style: 'cancel',
    //           },
    //           {text: 'OK', onPress: onPress },
    //         ],
    //         {cancelable: false},
    //     )
    // }
    handleSubmit() {
        const binId = this.props.message
        const onPress = this.props.onPress
        //console.log(onPress)
        db.ref("SBins/" + binId).update({
            locate: this.state.locate,
            date: this.state.date,
            description: this.state.description,
            image: this.state.image
        }).then(
            Alert.alert(
                'Alert',
                'Chinh sua hoan tat',
                [
                    { text: 'OK', onPress: onPress },
                ],
                { cancelable: false },
            )
        )


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
        const redirect = this.props.onPress
        //console.log("UID: ",uid)
        let uri = this.state.image
        return (
            <View style={styles.container}>
                <View style={styles.btnContainer}>
                    <Button
                        title="Choose Picture"
                        onPress={this.pickImage}
                        buttonStyle={styles.imgBtn}
                    />
                </View>
                <View style={styles.btnContainer}>
                <Button 
                        title="Camera"
                        onPress={this.takeImage}
                        buttonStyle={styles.imgBtn}
                    />
                </View>
                <View style={{ paddingBottom: 10 }}>
                    <Image source={{ uri: uri }} style={styles.imgSelected} />
                </View>
                <Input
                    inputStyle={styles.inputStyle}
                    onChangeText={(locate) => this.handleLocateInput(locate)}
                    editable={true}
                    value={this.state.locate}
                    leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
                />
                <Input
                    inputStyle={styles.inputStyle}
                    placeholder='Date'
                    onChangeText={(date) => { this.setState({ date }) }}
                    value={this.state.date}
                    leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
                />
                <Input
                    inputStyle={styles.inputStyle}
                    placeholder='Description'
                    value={this.state.description}
                    onChangeText={(description) => { this.setState({ description }) }}
                    leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
                />
                <View style={styles.btnContainer}>
                    <Button
                        title="Edit"
                        type="outline"
                        onPress={() => {
                            this.handleSubmit()
                        }}
                    />
                    {/* <TouchableOpacity onPress={this.alertHandle} style={styles.button}>
                        <Text>Submit</Text>
                    </TouchableOpacity> */}
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
        paddingBottom: 10
    },
    imgSelected: {
        width: 128, 
        height: 64 
    },
    imgBtn: {
        height:40,
        width:120
    },
    button: {
        backgroundColor: '#4ba37b',
        width: 100,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 100
    }
});