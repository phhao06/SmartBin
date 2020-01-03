import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import BinList from '../components/BinList';

export default class Home extends React.Component{
    static navigationOption = {
        tittle: 'Home'
    }
    constructor(props){
        super(props);
        this.state = {
            bin: [
                {
                    id: '1',
                    locate: 'backyard',
                    status: 'Empty',
                    img: '',
                    date: '2020/01/02'
                },
                {
                    id: '2',
                    locate: 'classroom',
                    status: 'Full',
                    img: '',
                    date: '2020/01/02'
                }
            ]
        }
    }
    render() {
        const { navigation } = this.props;
        return (
            <FlatList
                data = { this.state.bin }
                renderItem = {({item})=> <BinList bin={item}
                onPress={() => navigation.navigate('Detail', {
                    locate: item.locate, id: item.id})}
                />}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{padding: 16}}
            />
        )
    }
}