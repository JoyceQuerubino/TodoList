import React, { useState } from 'react';

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
    tasks.map(item => {
      if(item.id === id){
        item.done = !item.done;
      }
      return item;
    })
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