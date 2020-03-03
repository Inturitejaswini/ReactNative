

import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Image, TouchableOpacity } from 'react-native'
import styles from '../Css';

const Example = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = date => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    return (
        <View>
            <TouchableOpacity  onPress={showDatePicker}>
            <Image source={require("../assets/alert.png")}
             style={styles.alerticon}></Image>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker} />
                </TouchableOpacity>
        </View>
    );
};

export default Example;