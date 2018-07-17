import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Child from './components/Child';
import ButtonComp from './components/Button';
import * as actions from './actions';
import { connect } from 'react-redux';
import {SocialIcon} from 'react-native-elements';

class Main extends Component {
    handleIncrease = () => {
        this.props.counterIncrease();
    };

    handleDecrease = () => {
        this.props.counterDecrease();
    };
    handleMultiple = () => {
        this.props.counterMultiple2();
    };
    handleDivide = () =>{
        this.props.counterDivide2();
    }
    render() {
        return (
            <View style={{ flex: 1, width: '100%', justifyContent: 'center' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Child />
                </View>
                <View style={{ flex: 1 }}>
                    <ButtonComp title='Increase' textColor='#000' bgColor='#397af8' onPress={this.handleIncrease} />

                    <ButtonComp title='Decrease' bgColor='orange' onPress={this.handleDecrease} />
                    <ButtonComp title='Multiple2' bgColor='red' textColor='white' onPress={this.handleMultiple}/>
                    <ButtonComp title='Devide2' bgColor='blue' textColor='white' onPress={this.handleDivide}/>
                
                </View>

            </View>
        )
    }
}

export default connect(null, actions)(Main);
const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: 'red'
    },
    btnStyle: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        width: 100,
        height: 40,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: "red",
        backgroundColor: "#15c"
    },
});
