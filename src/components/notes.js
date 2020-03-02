import React, { Component } from 'react'
import { View, Text, TextInputBase } from 'react-native'
import { Image } from 'react-native'
import styles from '../Css';
import { TextInput } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';

export class Notes extends React.Component {
    render() {
        return (
            <View>
                <View >
                    <Image source={require("../assets/goback.png")} style={styles.gobackicon}></Image>
                </View>
                <View >
                    <Image source={require("../assets/pushpin.jpeg")} style={styles.pushpinicon}></Image>
                </View>
                <View >
                    <Image source={require("../assets/alert.png")} style={styles.alerticon}></Image>
                </View>
                <View >
                    <Image source={require("../assets/archive.png")} style={styles.archiveicon}></Image>
                </View>
                <View >
                    <TextInput placeholder={'Title'} style={styles.textinput}></TextInput>
                </View>
                <View >
                    <TextInput placeholder={'Note'} style={styles.textinput1}></TextInput>
                </View>
            </View>
        )
    }
}
export default Notes