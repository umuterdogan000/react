import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const AddButton = ({onPress}) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="add-outline" size={32} color="dark" />
      </TouchableOpacity>
    )

}

export default AddButton;



