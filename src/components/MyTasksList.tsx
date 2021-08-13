import React, {useContext} from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../pages/Home';
import { TaskItem } from './TaskItem';


function FlatListHeaderComponent() {
  const nightMode = useContext(ThemeContext);
  return (
    <View>
      <Text style={[styles.header, {color: nightMode ? '#FFF' : '#3D3D4D'}]}>Minhas tasks</Text>
    </View>
  )
}

export interface Task {
	id: number;
	title: string;
	done: boolean;
}

interface MyTasksListProps {
  tasks: Task[]; 
  onPress: (id: number) => void;
  onPressRemove: (id: number) => void;
}

export function MyTasksList({ tasks, onPressRemove, onPress }: MyTasksListProps) {
  
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TaskItem 
            index={index}
            item={item}
            onPressRemove={onPressRemove}
            onPress={onPress}
          />
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent/>}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  }
})