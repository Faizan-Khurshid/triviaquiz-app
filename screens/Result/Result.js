import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity  } from 'react-native';

export default class Result extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <View>
                <Text>Correct Answers : {this.props.navigation.getParam('correctAns')}</Text>
            </View>
        )
    }
}