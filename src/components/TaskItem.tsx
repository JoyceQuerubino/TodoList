import React, {useContext} from 'react'; 
import { 
    View,
	TouchableOpacity,
	StyleSheet,
	Text,
	Image,
	TextInput
} from 'react-native'; 
import { Task } from "./MyTasksList";
import { ThemeContext } from '../pages/Home';

import trash from "../assets/icons/bin.png";
import trashWhite from "../assets/icons/bin_white.png";

interface TaskItemProps {
    index: number; 
    item: Task; 
    onPress: (id: number) => void;
    onPressRemove: (id: number) => void;
  }

export function TaskItem({ index, item, onPressRemove, onPress }: TaskItemProps){

    const nightMode = useContext(ThemeContext);

    return(
        <>
            <TouchableOpacity
                style={[
                styles.taskButton,
                item.done && styles.taskButtonDone, 
                nightMode && { backgroundColor: '#dabbe93b'}, 
                nightMode && item.done && { backgroundColor: '#9347ca36'}, 
                ]}
                testID={`button-${index}`}
                activeOpacity={0.7}
                onPress={() => onPress(item.id)}
            >
                <View style={styles.content}>
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
                </View>

                <TouchableOpacity
                    onPress={() => onPressRemove(item.id)} 
                >
                    {
                        nightMode ? 
                        (<Image source={trashWhite} style={[styles.icon,  item.done && {opacity: 0.4}]}/>) 
                        : 
                        ( <Image source={trash} style={[styles.icon, item.done && {opacity: 0.4}]}/>)
                    }
                </TouchableOpacity>
            </TouchableOpacity>
          
        </>
    )
}

const styles = StyleSheet.create({
    taskButton: {
      width: '100%',
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 16,
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: 'center', 
      backgroundColor: '#aab4ce29', 
      justifyContent: 'space-between'
    },
    content:{ 
        flexDirection: 'row', 
        alignItems: 'center', 
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
      marginBottom: 16,
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
    }, 
    iconsContainer: {
      
    }, 
    icon:{
        width: 18, 
        height: 18, 
    }
  })