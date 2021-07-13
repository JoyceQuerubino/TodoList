import React, { useState, createContext } from 'react';
import { Button, StyleSheet, View } from 'react-native'; 

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';


export const ThemeContext = createContext(false);


interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskValidationDone, settaskValidationDone] = useState(false); 

  const [text, setText] = useState('Light');
  const [nightMode, setNightMode] = useState(false);

  function handleChangeMode(){
    if(text === 'Light'){
      setText('Dark')
      setNightMode(true)
    } else {
      setText('Light')
      setNightMode(false)
    }
  }

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if(typeof newTaskTitle === 'string' && newTaskTitle != ''){
      
      const task: Task = {
        id: new Date().getTime(), 
        title: newTaskTitle, 
        done: false
      }

      setTasks(oldState => [ ...oldState, task ]);
    }
  }

  function handleMarkTaskAsDone(id: number) {

    setTasks(array => array.map(item => {
      if(item.id === id){
        item.done = !item.done;
      }
      return item;
    }))

    settaskValidationDone(el => !el)
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(oldSkill => oldSkill.filter(
      skill => skill.id !== id
    ));
  }
  
  return (
    <ThemeContext.Provider value={nightMode}>
      < View style={[styles.container, {backgroundColor: nightMode ? '#191D3A' : '#F5F4F8'}]}>
        
        <Header/>

        <TodoInput 
          addTask={handleAddTask}
        />
      
        <View style={styles.button}>
          <Button 
            color={nightMode ? "#9347CA" : "#273FAD"}
            onPress={handleChangeMode}
            title={text}
          />
        </View>
      
        <MyTasksList 
          tasks={tasks}
          onPress={handleMarkTaskAsDone} 
          onLongPress={handleRemoveTask} 
        />
      </View>
    </ThemeContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  button: { 
    marginTop: 25, 
    marginBottom: 20, 
    marginHorizontal: 24,
    width: 62, 
    height: 32, 
  },
})