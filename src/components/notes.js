import React, { Component } from 'react'
import { View } from 'react-native'
import { Image, TouchableOpacity } from 'react-native'
import styles from '../Css';
import { TextInput, } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';
// import MoreComponent from '../components/moreComponent';

export class Notes extends React.Component {
    render() {
        return (
            <View>

                <View >
                    <TouchableOpacity>
                        <Image source={require("../assets/goback.png")} style={styles.gobackicon}
                            onPress={() => this.props.navigation.navigate('dashboard')}></Image>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity>
                        <Image source={require("../assets/pushpin.jpeg")} style={styles.pushpinicon}></Image>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity>
                        <Image source={require("../assets/alert.png")} style={styles.alerticon}></Image>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity>
                        <Image source={require("../assets/archive.png")} style={styles.archiveicon}></Image>
                    </TouchableOpacity>
                </View>
                <View >
                    <TextInput placeholder={'Title'} style={styles.textinput}></TextInput>
                </View>
                <View >
                    <TextInput placeholder={'Note'} style={styles.textinput1}></TextInput>
                </View>
                <View >
                    <TouchableOpacity>
                            <Image source={require("../assets/more.png")}
                             style={styles.moreicon}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default Notes