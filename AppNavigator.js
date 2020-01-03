import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Detail from './screens/Detail';
import Enroll from './screens/Enroll';
import Edit from './screens/Edit'

const color = {
    ACTIVE: '#194ba8',
    INACTIVE: '#ccc'
}

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
    },
    Detail: {
        screen: Detail,
    },
    Edit: {
        screen: Edit
    }
});
HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => {
        return <Icon name="md-home"
        size={36}
        color= {focused ? color.ACTIVE : color.INACTIVE}
        />
    }
}
const EnrollStack = createStackNavigator({
    Enroll
});
EnrollStack.navigationOptions = {
    tabBarLabel: 'Enroll',
    tabBarIcon: ({focused}) => {
        return <Icon name="md-create"
        size={36}
        color= {focused ? color.ACTIVE : color.INACTIVE}
        />
    }
}
const AppNavigator = createBottomTabNavigator({
    HomeStack,
    EnrollStack
})

export default AppNavigator;