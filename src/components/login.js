/******************************************************************************
* Execution : 1. default node cmd> node archive.jsx 
* 2. if nodemon installed cmd> nodemodule archive.jsx
* 
* Purpose : create archive page.
* @description 
* 
* @file :archive.jsx
* @overview :archive form problem.
* @module :archive - This is optional if expeclictly its an npm or local package
* @author :tejaswini<chowdarytejaswini2@gmail.com>
* @version :1.0
* @since :-28-01-2020
******************************************************************************/

import React, { Component } from 'react'
import { View} from 'react-native'
export class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',

        }
    }
    render() {
        return (
            <View style={styles.container}>
                hai react
            </View>
        )
    }
}
export default Login