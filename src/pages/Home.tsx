import React, { useState, useEffect } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskValidationDone, settaskValidationDone] = useState(false); 

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
    //TODO - mark a task como 'done' se exstir
    // let taskItems = tasks;
    // let validation = !taskValidationDone;

    // taskItems.map(item => {
    //   if(item.id === id){
    //     item.done = !item.done;
    //   }
    //   return item;
    // })
    // setTasks(taskItems); //Atualiza o valor da task
    // settaskValidationDone(validation);

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
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />
      
      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}