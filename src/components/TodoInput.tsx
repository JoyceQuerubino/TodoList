import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
  darkTheme: boolean
}

export function TodoInput({ addTask, darkTheme }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask(task: string) {
    //TODO - Call addTask and clean input value
    addTask(task);
    setTask(elemento => '');
  }

  return (
    <View style={[styles.inputContainer, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]}>
      <TextInput 
        value={task} //vincular o estado com o textfield
        style={styles.input} 
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        //TODO - use value, onChangeText and onSubmitEditing props
        onChangeText={setTask} //escuta o modificador
        onSubmitEditing={() => handleAddNewTask(task)}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[styles.addButton, {backgroundColor: darkTheme ? '#9347CA' : '#3FAD27'}]}
        //TODO - onPress prop
        onPress={() => handleAddNewTask(task)}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F5F4F8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F4F8',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});