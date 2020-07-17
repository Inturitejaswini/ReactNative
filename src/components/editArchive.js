import React, {Component} from 'react';
import {DoneIcon, UnArchiveIcon} from 'react-native-vector-icons/MaterialIcons';
import ArrowLeft from 'react-native-vector-icons/MaterialCommunityIcons';
import {ShareAltIcon,DeleteIcon,PushPinIcon} from 'react-native-vector-icons/AntDesign';
import ElipsisIcon from 'react-native-vector-icons/FontAwesome';
import {RBSheet, RBSheet2} from 'react-native-raw-bottom-sheet';
import {IconButton} from 'react-native-paper';
import styles from '../Styles';
import {editNotes,UnArchiveNotes,deleteNotes,pinNotes,UnpinNotes,updateColor,createLabels} from '../services/noteServices';
import ReminderComponent from './reminder';
import {Text, TextInput, View, FlatList, TouchableOpacity} from 'react-native';
const colors = [
  {name: 'blue', hexcode: ' #39a78e'},
  {name: 'violet', hexcode: '#7DCEA0'},
  {name: 'blue', hexcode: '#76D7C4'},
  {name: 'orange', hexcode: '#5499C7'},
  {name: 'beige', hexcode: '#79d4e7'},
  {name: 'golden', hexcode: '#EC7063'},
  {name: 'lightorange', hexcode: '#E59866'},
  {name: 'skyblue', hexcode: '#d3a625'},
  {name: 'green', hexcode: '#F7DC6F'},
  {name: 'darkseagreen', hexcode: '#BB8FCE'},
  {name: 'blue', hexcode: '#D2B4DE'},
  {name: 'gray', hexcode: '#ABB2B9'},
  {name: 'salmon', hexcode: '#98AFC7'},
  {name: 'mistyRose', hexcode: '#74a775'},
];
export class EditArchiveComponent extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      reminderDate: '',
      reminder: '',
      isDeleted: false,
      isArchived: false,
      isPined: false,
      key: '',
      key1: '',
      colors: false,
      labelValue: '',
      selectedLabels: '',
      labelData: [],
      label: false,
    };
  }
  reminderData = (value) => {
    this.setState({
      reminderDate: value,
    });
  };
  handlePin = () => {
    this.setState({
      isPined: true,
    });
    let data = {
      noteIdList: [this.props.navigation.state.params.key],
      isPined: this.state.isPined,
    };
    pinNotes(data);
  };
  handleUnPin = () => {
    this.setState({
      isPined: false,
    });
    let data = {
      noteIdList: [this.props.navigation.state.params.key],
      isPined: this.state.isPined,
    };
    UnpinNotes(data);
  };
  handleDelete = () => {
    this.setState({isDeleted: true});
    let data = {
      noteIdList: [this.props.navigation.state.params.key],
      isDeleted: this.state.isDeleted,
    };
    deleteNotes(data);
  };
  handleUnArchiveNote = () => {
    this.setState({isArchived: false});
    let data = {
      noteIdList: [this.props.navigation.state.params.key],
      isArchived: this.state.isArchived,
    };
    UnArchiveNotes(data);
  };

  handleLabelDone = () => {
    this.setState({label: true});
    let data = {
      noteIdList: [this.props.navigation.state.params.key],
      label: this.state.label,
    };
    createLabels(data);
  };
  handleSelectLabel = (labelName) => {
    this.setState({
      selectedLabels: labelName,
    });
  };
  handleLabelArrow = (labelValue) => {
    this.RBSheet2.close();
    this.RBSheet.close();
    this.setState({
      labelValue: labelValue,
    });
  };
  handleEditCard = () => {
    let data = {
      title: this.state.title,
      description: this.state.description,
      isDeleted: this.state.isDeleted,
      noteId: this.props.navigation.state.params.key,
      reminder: this.state.reminderDate,
      isArchived: this.state.isArchived,
      isPined: this.state.isPined,
      color: this.state.color,
      labelValue: this.state.labelValue,
    };
    editNotes(data).then((res) => {
      this.setState({
        color: res.color,
      });
    });
    this.props.navigation.navigate('archive');
  };
  handleColor = (color) => {
    this.setState({
      color: color,
    });
    let data = {
      noteIdList: [this.props.navigation.state.params.key],
      color: this.state.color,
    };
    updateColor(data);
  };
  componentDidMount() {
    this.setState({
      title: this.props.navigation.state.params.display.title,
      isDeleted: this.props.navigation.state.params.display.isDeleted,
      description: this.props.navigation.state.params.display.description,
      reminder: this.props.navigation.state.params.display.reminder,
      isArchived: this.props.navigation.state.params.display.isArchived,
      color: this.props.navigation.state.params.display.color,
      labelValue: this.props.navigation.state.params.display.labelValue,
    });
  }
  render() {
    return (
      <View style={{backgroundColor: this.state.color}}>
        <View style={styles.view}>
          <View>
            <ArrowLeft
              name="arrow-left"
              size={25}
              onPress={() => {
                this.handleEditCard();
              }}
            />
          </View>
          <View style={styles.editIcons}>
            <View>
              <TouchableOpacity>
                {!this.state.isPined ? (
                  <PushPinIcon
                    onPress={() => this.handlePin()}
                    name="pushpino"
                    size={25}
                  />
                ) : (
                  <PushPinIcon
                    onPress={() => this.handleUnPin()}
                    name="pushpin"
                    size={25}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View>
              <ReminderComponent
                reminderProps={()=>this.reminderData}></ReminderComponent>
            </View>
            <View style={styles.unarchive}>
              <UnArchiveIcon
                name="unarchive"
                size={25}
                onPress={() => this.handleUnArchiveNote()}
              />
            </View>
          </View>
        </View>
        <View style={styles.noteData}>
          <View>
            <TextInput
              placeholder="Tittle"
              defaultValue={this.props.navigation.state.params.display.title}
              onChangeText={(title) => this.setState({title})}
              value={this.state.title}
            />
          </View>
          <View style={styles.textInput}>
            <TextInput
              placeholder="note"
              defaultValue={
                this.props.navigation.state.params.display.description
              }
              value={this.state.description}
              onChangeText={(description) => this.setState({description})}
            />
          </View>
          <Text style={styles.reminder}>{this.state.reminder}</Text>
        </View>
        <View>
          <ElipsisIcon
            name="ellipsis-v"
            size={25}
            onPress={() => {
              this.RBSheet.open();
            }}
          />
          <RBSheet
            ref={(ref) => {
              this.RBSheet = ref;
            }}
            height={230}
            duration={250}
            customStyles={{
              container: {
                flexDirection: 'column',
              },
            }}>
            <View style={styles.delete}>
              <TouchableOpacity onPress={() => this.handleDelete()}>
                <DeleteIcon name="delete" size={20} />
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
            <View>
              <ShareAltIcon name="sharealt" size={22} />
              <Text style={styles.send}>send</Text>
            </View>
            <View style={styles.collaborator}>
              <ShareAltIcon name="addusergroup" size={25} />
              <Text
                style={styles.collaboratorText}
                onPress={() => {
                  this.RBSheet1.open();
                }}>
                collaborator
              </Text>
            </View>
            <View>
              <LabelIcon name="label-outline" size={25} />
              <Text
                onPress={() => {
                  this.RBSheet2.open();
                }}>
                Labels
              </Text>
            </View>
            <View>
              <FlatList
                data={colors}
                horizontal={true}
                renderItem={({item}) => (
                  <View
                    style={{
                      marginTop: 10,
                    }}>
                    <IconButton
                      style={{backgroundColor: item.hexcode, borderRadius: 15}}
                      value={item.hexcode}
                      size={40}
                      onPress={() => this.handleColor(item.hexcode)}
                    />
                  </View>
                )}
              />
            </View>
          </RBSheet>
        </View>
        <View>
          <RBSheet2
            ref={(ref) => {
              this.RBSheet2 = ref;
            }}
            height={620}
            duration={250}
            customStyles={{
              container: {
                flexDirection: 'column',
              },
            }}>
            <View style={styles.ArrowLeft}>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    this.handleLabelArrow(this.state.selectedLabels)
                  }>
                  <ArrowLeft name="arrow-left" size={25} />
                </TouchableOpacity>
              </View>
              <View>
                <TextInput
                  style={styles.label}
                  placeholder="Enter label name"
                  value={this.state.label}
                  onChangeText={(label) => this.setState({label})}
                />
              </View>
              <View>
                <DoneIcon
                  name="done"
                  size={25}
                  onPress={() => {
                    this.handleLabelDone();
                  }}
                />
              </View>
            </View>
          </RBSheet2>
        </View>
      </View>
    );
  }
}
export default EditArchiveComponent;
