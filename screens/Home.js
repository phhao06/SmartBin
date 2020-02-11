import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import BinList from '../components/BinList';
import { db } from '../config'

let binRef = db.ref('bins/');
export default class Home extends React.Component{
    static navigationOption = {
        tittle: 'Home'
    }
    constructor(props){
        super(props);
        this.state = {
            bins: [
                // {
                //     id: '1',
                //     locate: 'backyard',
                //     status: 'Empty',
                //     img: '',
                //     date: '2020/01/02'
                // },
                // {
                //     id: '2',
                //     locate: 'classroom',
                //     status: 'Full',
                //     img: '',
                //     date: '2020/01/02'
                // }
            ]
        }
        //this.updateBins = this.updateBins.bind(this);
    }
    // getData() {
    //     var fetchData = this.state.bins
    //     db.ref('bins/').on('value', function(snapshot) {
    //         snapshot.forEach(function(snap){
    //             if(fetchData.includes(snap.val())){
    //                 continue
    //             }else{
    //                 fetchData.push(snap.val())
    //             }
    //         })
    //     })
    // }
    async componentDidMount() {
        let currentComponent = this;
        try {
          //get data from firebase
        
        // await db.ref('bins/').on('value', function(snapshot) {
        //     snapshot.forEach(function(snap){
                
        //         if(fetchData.includes(snap.val()))
        //             console.log("Exist")
        //         else{
        //             fetchData.push(snap.val())
        //         }
        //     })
        // })
        binRef.on('value', function(snapshot){
            let fdata = snapshot.val();
            let bins = Object.values(fdata);
            currentComponent.setState({bins})
        });
        //this.updateBins(fData);
        //console.log(fetchData)
        
        } catch (err) {
          console.log(err)
        }
    
     }
    // componentWillMount() {
    //     this.setState({
    //         bins: db.ref('bins/').on('value', function(snap) {
    //             return Object.values(snap.val())
    //         })
    //     })
    // }
    render() {
        const { navigation } = this.props;
        // db.ref('bins/').on('value', function(snapshot) {
        //     console.log(snapshot.val());
        
        // });
        //console.log(Object.values(temp))
        console.log(this.state.bins);
        return (
            <FlatList
                data = { this.state.bins }
                renderItem = {({item})=> <BinList bin={item}
                onPress={() => navigation.navigate('Detail', {
                    id: item.id})}
                />}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{padding: 16}}
            />
        )
    }
}