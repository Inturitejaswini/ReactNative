import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import styles from '../Styles';
import ArrowLeftIcon from 'react-native-vector-icons/Feather';
import {createLabel, getAllLabels} from '../services/noteServices';
var tempCheckValues = [];
export default class Labels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelName: '',
      userId: '',
      allLables: [],
      checked: false,
      labelIdArray: [],
      selectedLabels: [],
      checkBoxChecked: [],
      selectedLabelsId: [],
    };
  }
  componentDidMount() {
    this.getLabels();
  }
  handleAddLabel = () => {
    this.setState({userId: userId});
    const data = {
      label: this.state.labelName,
      id: this.props.noteId,
      userId: this.state.userId,
      isDeleted: false,
    };
    createLabel(data)
      .then((res) => {
        this.getLabels();
      })
      .catch((err) => {
        alert(err);
      });
  };
  
  getLabels() {
    getAllLabels()
      .then((res) => {
        this.setState({allLables: res.data.data.details});
      })
      .catch((err) => {
        alert(err);
      });
  }
  checkBoxChanged(id, label, value) {
    this.state.selectedLabels.push(label);
    this.state.selectedLabelsId.push(id);
    this.setState({
      checkBoxChecked: tempCheckValues,
    });
    var tempCheckBoxChecked = this.state.checkBoxChecked;
    tempCheckBoxChecked[id] = !value;
    this.setState({
      checkBoxChecked: tempCheckBoxChecked,
    });
  }
  handleCloseLabels(labels, id) {
    this.props.handleCloseLabels(labels, id);
  }
  render() {
    let labelsToDisplay = [];
    labelsToDisplay = this.state.allLables.map((item) => {
      {
        tempCheckValues[item.id] = false;
      }
      return (
        <CheckBox
          title={item.label}
          checked={this.state.checkBoxChecked[item.id]}
          onPress={() =>
            this.checkBoxChanged(
              item.id,
              item.label,
              this.state.checkBoxChecked[item.id],
            )
          }
        />
      );
    });
    return (
      <View>
        <View style={styles.labelHeaderContainer}>
          <View style={styles.arrowIconContainer}>
            <TouchableOpacity
              onPress={() => {
                this.handleCloseLabels(
                  this.state.selectedLabels,
                  this.state.selectedLabelsId,
                );
              }}>
              <ArrowLeftIcon name="arrow-left" size={25} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.labelTextFldContainer}>
            <TextInput
              placeholder="Enter Label Name"
              underlineColorAndroid="transparent"
              onChangeText={(labelName) => this.setState({labelName})}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={this.handleAddLabel}
            style={styles.plusIconAndLableContainer}>
            <View style={styles.plusIconContainer}>
              <ArrowLeftIcon name="plus" size={23} color="#FFA500" />
            </View>
            <View style={styles.labelTextContainer}>
              <Text style={styles.createLabel1}>
                Create "{this.state.labelName}"
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>{labelsToDisplay}</View>
      </View>
    );
  }
}
