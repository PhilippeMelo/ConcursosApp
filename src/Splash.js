
import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Splash extends Component {

    render() {
        return (
          <View style={styles.wrapper}>
            <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>Splash Screen</Text>
            </View>
            <View style={styles.subtitleWrapper}>
                <Text style={styles.subtitleText}>Created by Onezino and Philippe</Text>
            </View>
            
          </View>
        );
      }

}

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText:{
        color: 'white',
        fontSize: 24
    },
    subtitleText: {
        color: '#f2f2f2',
        fontSize: 16,
    },
    titleWrapper: {
        flex: 1,
    },
    subtitleWrapper: {
        paddinBottom: 14,
    }
});