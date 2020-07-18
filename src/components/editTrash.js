import React, {Component} from 'react';
import {
  ArrowLeft,
  DeleteForeverIcon,
  RestoreIcon,
} from 'react-native-vector-icons/MaterialCommunityIcons';
import ElipsisIcon from 'react-native-vector-icons/FontAwesome';
import RBSheet from 'react-native-raw-bottom-sheet';
import {IconButton, Colors} from 'react-native-paper';
import styles from '../Styles';
import {
  editNotes,
  deleteForever,
  updateColor,
  restore,
} from '../services/noteServices';
import Snackbar from 'react-native-snackbar-component';
import {Text, TextInput, View, FlatList, TouchableOpacity} from 'react-native';
const colors = [
  {name: 'blue', hexcode: ' #b8abb9'},
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
export class EditTrashComponent extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      isDeleted: false,
      key: '',
      colors: false,
      snackbarMsg: '',
      snackbarOpen: false,
    };
  }

  handleDeleteForever = () => {
    let data = {
      noteIdList: [this.props.navigation.state.params.key],
      isDeleted: this.state.isDeleted,
    };
    deleteForever(data)
      .then((res) => {
        this.setState({isDeleted: false});
      })
      .catch((err) => {
        this.setState({
          snackbarOpen: true,
          snackbarMsg: err,
        });
      });
  };
  handleRestore = () => {
    let data = {
      noteIdList: [this.props.navigation.state.params.key],
      isDeleted: this.state.isDeleted,
    };
    restore(data)
      .then((res) => {
        this.setState({isDeleted: true});
      })
      .catch((err) => {
        this.setState({
          snackbarOpen: true,
          snackbarMsg: err,
        });
      });
    this.props.navigation.navigate('dashboard');
  };
  handleEditCard = () => {
    let data = {
      title: this.state.title,
      description: this.state.description,
      noteId: this.props.navigation.state.params.key,
      color: this.state.color,
      isDeleted: this.state.isDeleted,
    };
    editNotes(data).then((res) => {
      this.setState({
        color: res.color,
      });
      this.props.navigation.navigate('trash');
    }, 100);
  };
  handleColor = (color) => {
    let data = {
      noteIdList: [this.props.navigation.state.params.key],
      color: this.state.color,
    };
    updateColor(data)
      .then((res) => {
        this.setState({
          color: color,
        });
      })
      .catch((err) => {
        this.setState({
          snackbarOpen: true,
          snackbarMsg: err,
        });
      });
  };
  componentDidMount() {
    this.setState({
      title: this.props.navigation.state.params.display.title,
      isDeleted: this.props.navigation.state.params.display.isDeleted,
      description: this.props.navigation.state.params.display.description,
      color: this.props.navigation.state.params.display.color,
    });
  }
  render() {
    return (
      <View style={{backgroundColor: this.state.color}}>
        <View style={styles.arrowLeft}>
          <ArrowLeft
            name="arrow-left"
            size={25}
            onPress={() => {
              this.handleEditCard();
            }}
          />
        </View>
        <View style={styles.noteData}>
          <View>
            <TextInput
              style={styles.title}
              placeholder="Tittle"
              defaultValue={this.props.navigation.state.params.display.title}
              onChangeText={(title) => this.setState({title})}
              value={this.state.title}
            />
          </View>
          <View style={styles.note}>
            <TextInput
              placeholder="note"
              defaultValue={
                this.props.navigation.state.params.display.description
              }
              value={this.state.description}
              onChangeText={(description) => this.setState({description})}
            />
          </View>
        </View>
        <View style={styles.elipsis}>
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
            height={150}
            duration={250}
            customStyles={{
              container: {
                flexDirection: 'column',
              },
            }}>
            <View style={styles.deleteIcon}>
              <TouchableOpacity onPress={() => this.handleRestore()}>
                <RestoreIcon name="restore-clock" size={20} />
                <Text style={styles.restor}>Restore</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.deleteForever}>
              <TouchableOpacity onPress={() => this.handleDeleteForever()}>
                <DeleteForeverIcon name="delete-forever" size={22} />
                <Text style={styles.deleteForeverText}>DeleteForever</Text>
              </TouchableOpacity>
            </View>
            <View>
              <FlatList
                data={colors}
                horizontal={true}
                renderItem={({item}) => (
                  <View style={styles.colorBtn}>
                    <IconButton
                      style={{
                        backgroundColor: item.hexcode,
                      }}
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
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          autoHideDuration={3000}
          open={this.state.snackbarOpen}
          message={<span id="message-id">{this.state.SnackbarMsg}</span>}
        />
      </View>
    );
  }
}
export default EditTrashComponent;
