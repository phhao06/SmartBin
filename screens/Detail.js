import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import Bin from '../components/Bin';

export default class Detail extends React.Component{
    static navigationOptions = ({ navigation }) => {
        return {
            tittle: navigation.getParam('locate')
        }
    }
    constructor(props){
        super(props);
        this.state = {
            id: ''
        }
    }
    async componentDidMount() {
        const { navigation } = this.props;
        const binId = navigation.getParam('id');
        this.setState({id : binId})
        try {
          // get data from firebase
        } catch (err) {
          console.log(err)
        }
    
    }
    render() {
        
        const { navigation } = this.props;
        return (
                <View style={styles.container}>
                <Bin onPress={() => navigation.navigate('Edit',{id: this.state.id})}
        />
            </View>
        )
    }
    
}
const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 8,
      paddingVertical: 16
    },
    wrapper: {
      flex: 1,
      paddingHorizontal: 8
    }
  });