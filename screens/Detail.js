import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import Bin from '../components/Bin';
import { db } from '../config';
import { ScrollView } from 'react-native-gesture-handler';


export default class Detail extends React.Component{
    static navigationOptions = ({ navigation }) => {
        return {
            tittle: navigation.getParam('locate')
        }
    }
    constructor(props){
        super(props);
        this.state = {
          bin: {

          }
        }
    }
    async componentDidMount() {
        // const { navigation } = this.props;
        // const binId = navigation.getParam('id');
        const { navigation } = this.props;
        const binId = navigation.getParam('id');
        console.log("console from detail ",binId);
        let currentComponent = this;
        let rootRef = db.ref('SBins/'+binId)
        try {
        rootRef.once('value', function(snapshot){
            let fdata = snapshot.val();
            //let uniqueId = Object.keys(fdata);
            fdata.uuid = binId 
            currentComponent.setState({bin: fdata})
        });
        
        } catch (err) {
          console.log(err)
        }
    
    }
    render() {
        
        const { navigation } = this.props;
        let binInfo = this.state.bin;
        return (
            <ScrollView>
                <View style={styles.container}>
                <Bin 
                bin = {binInfo}
                onPress={() => navigation.navigate('Edit', {id: binInfo.uuid})}
                redirectHome = {() =>navigation.navigate('Home')}
              />
            </View>
            </ScrollView>
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