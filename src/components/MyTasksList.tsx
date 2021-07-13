import React, {useContext} from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';
import { ThemeContext } from '../pages/Home';


function FlatListHeaderComponent() {
  const nightMode = useContext(ThemeContext);
  return (
    <View>
      <Text style={[styles.header, {color: nightMode ? '#FFF' : '#3D3D4D'}]}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {

  const nightMode = useContext(ThemeContext);
  
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            style={[
              styles.taskButton,
              item.done && styles.taskButtonDone, 
              nightMode && item.done && { backgroundColor: 'rgba(rgba(115, 108, 163, 0.3)'}, 
            
            ]}
            testID={`button-${index}`}
            activeOpacity={0.7}
            //TODO - use onPress, onLongPress and style props
            onPress={() => onPress(item.id)} 
            onLongPress={() => onLongPress(item.id)} 
          >
            <View 
              testID={`marker-${index}`}
              style={[
                styles.taskMarker,
                nightMode && {borderColor: '#FFF'},

                item.done && styles.taskMarkerDone,
                nightMode && item.done && {borderColor: '#9347CA', backgroundColor: '#9347CA'}
              ]}
            />
            <Text 
              style={[
                styles.taskText, 
                nightMode && {color: '#FFF'},

                item.done && styles.taskTextDone
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent/>}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        // marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  }
})