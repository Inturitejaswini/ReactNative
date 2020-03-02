import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { Image, TouchableOpacity } from 'react-native'
import styles from '../Css';
export class MoreComponent extends React.Component {
    state = {
        visible: false,
    };

    _openMenu = () => this.setState({ visible: true });

    _closeMenu = () => this.setState({ visible: false });

    render() {
        return (
            <Provider >
                <View
                    // style={{
                    //     paddingTop: 50,
                    //     flexDirection: 'row',
                    //     justifyContent: 'center'
                    // }}
                    > 
                    <Menu 
                        visible={this.state.visible}
                        onDismiss={this._closeMenu}
                        // style={styles.menupaper}
                        anchor={
                            <Button onPress={this._openMenu} style={styles.menupaper2}>
                                <Image source={require("../assets/more.png")}  style={styles.moreicon1}></Image>
                            </Button>}>
                        <Menu.Item onPress={() => { }} title="Item 1"  style={styles.menupaper}/>
                        <Menu.Item onPress={() => { }} title="Item 2"  style={styles.menupaper}/>
                        <Menu.Item onPress={() => { }} title="Item 3"  style={styles.menupaper}/>
                    </Menu>
                </View>
            </Provider>
        );
    }
}
export default MoreComponent