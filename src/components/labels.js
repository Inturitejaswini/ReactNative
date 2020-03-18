import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, AsyncStorage } from 'react-native'
import {CheckBox} from 'react-native-elements'
import styles from "../Styles";
import Icon from 'react-native-vector-icons/Feather'
import { createLabel, getAllLabels } from '../services/noteServices'
var tempCheckValues = [];
export default class Labels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labelName: "",
            userId: '',
            allLables: [],
            checked:false,
            labelIdArray:[],
            selectedLabels:[],
            checkBoxChecked:[],
            selectedLabelsId:[],
        }
    }
    handleAddLabel = async () => {
        let userId = await AsyncStorage.getItem("userId")
        console.log('====================================');
        console.log(this.props.noteId,"noteId in labels");
        console.log('====================================');
        this.setState({ userId: userId })
        const data = {
            label: this.state.labelName,
            id:this.props.noteId,
            userId: this.state.userId,
            isDeleted: false
        }
        createLabel(data).then(res => {
            console.warn("res in creating label", res.data)
            console.log("res in creating label", res)
            this.getLabels()
        }).catch(err => {
                console.log("err in create label", err)
            })
    }
    componentDidMount() {
        this.getLabels()
    }
    getLabels(){
    getAllLabels().then(async res => {
        console.warn("res in getting labels", res.data.data.details)
        console.log("res in getting labels", res)
        await this.setState({ allLables: res.data.data.details })
    }).catch(err => {
        console.warn("err in getting labels", err)
        console.log("err in getting labels", err)

    })
}
    checkBoxChanged(id,label, value) {
        console.warn("val in func",value)
        console.warn("id in func",id)
        console.warn("label in func",label)
       this.state.selectedLabels.push(label)
       this.state.selectedLabelsId.push(id)
        this.setState({
          checkBoxChecked: tempCheckValues
        })
        console.warn("label",this.state.checkBoxChecked)
        var tempCheckBoxChecked = this.state.checkBoxChecked;
        tempCheckBoxChecked[id] = !value;  
        this.setState({
          checkBoxChecked: tempCheckBoxChecked
        })
        console.log("state label",this.state.checkBoxChecked)
        console.log("state label",this.state.selectedLabels)
        console.log("state label",this.state.selectedLabelsId)
      }
      handleCloseLabels(labels,id){
        console.log("labels",labels,"id",id)
         this.props.handleCloseLabels(labels,id)
    }
    render() {
        let labelsToDisplay=[];
        labelsToDisplay = this.state.allLables.map(item => {
            { tempCheckValues[item.id] = false }
            return (
                    <CheckBox
                        title={item.label}
                        checked={this.state.checkBoxChecked[item.id]}
                        onPress={() => this.checkBoxChanged(item.id,item.label, this.state.checkBoxChecked[item.id])}
                    />
            )
        })
        return (
            <View>
                <View style={styles.labelHeaderContainer}>
                    <View style={styles.arrowIconContainer}>
                        <TouchableOpacity onPress={()=>{this.handleCloseLabels(this.state.selectedLabels,this.state.selectedLabelsId)}}>
                            <Icon name="arrow-left" size={25} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.labelTextFldContainer}>
                        <TextInput placeholder="Enter Label Name"
                            underlineColorAndroid='transparent'
                            onChangeText={(labelName) => this.setState({ labelName })}
                        /></View>
                </View>
                <View>
                    <TouchableOpacity onPress={this.handleAddLabel} style={styles.plusIconAndLableContainer}>
                        <View style={styles.plusIconContainer}>
                            <Icon name="plus" size={23} color="#FFA500" />
                        </View>
                        <View style={styles.labelTextContainer}>
                            <Text style={{ fontWeight: "800", fontSize: 15 }}>Create "{this.state.labelName}"</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    {labelsToDisplay}
                </View>
            </View>
        )
    }
}