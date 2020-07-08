import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import BinList from '../components/BinList';
import { db } from '../config'

let binRef = db.ref('SBins/');
export default class Home extends React.Component{
    static navigationOption = {
        tittle: 'Home'
    }
    constructor(props){
        super(props);
        this.state = {
            bins: [

            ]
        }
        
    }
    async componentDidMount() {
        let currentComponent = this;
        try {
        binRef.on('value', function(snapshot){
            let fdata = snapshot.val();
            //get uuid of each item
            let uuidArr = Object.keys(fdata);
            //console.log(uuidArr);
            let bins = Object.values(fdata);
            for(let i=0;i<uuidArr.length;i++){
                bins[i].uuid = uuidArr[i]
            }
            currentComponent.setState({bins})
        });
        } catch (err) {
          console.log(err)
        }
    
     }

    render() {
        const { navigation } = this.props;
        //console.log(this.state.bins);
        return (
            <FlatList
                data = { this.state.bins }
                renderItem = {({item})=> <BinList bin={item}
                onPress={() => navigation.navigate('Detail', {
                    id: item.uuid})}
                />}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{padding: 16}}
            />
        )
    }
}