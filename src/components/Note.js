
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default class Note extends Component {
  render() {
    return (
      <View key={this.props.keyVal} style={styles.note}>

        <Text style={styles.dateText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
            <Text style={styles.noteDeleteText}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    note:{
        position: 'relative',
        padding: 10,
        paddingRight: 100,
        borderBottomWidth: 4,
        borderBottomColor: '#ddd',
        backgroundColor: '#f2f2f2'
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#009900',
    },
    dateText: {
      fontSize: 11,
      paddingLeft: 20,
      borderLeftWidth: 10,
      borderLeftColor: '#009900',
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 14,
        bottom: 14,
        right: 14,
    },
    noteDeleteText: {
        fontSize: 14,
        color: 'white',
    }

});
