import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FAB from './components/FAB';

export default function App() {
 const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>
      <FAB label='- 1' onPress={ () => setCount(count - 1 )} onLongPress={ () => setCount(0)} position='left' />  
      <FAB label='+ 1' onPress={ () => setCount(count + 1 )} onLongPress={ () => setCount(0)}  />  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHuge : { 
    fontSize: 100,
    color: 'white', 
    textAlign: 'center',
    lineHeight: 100,
  },
  floatingButton : { 
    position: 'absolute',
    fontSize: 100,
    color: 'white',
    bottom: 20,
    right: 20,
    backgroundColor: '#65558f',
    borderRadius: 100,
    width: 100,
    height: 100,
    textAlign: 'center',
    lineHeight: 100,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10, // for Android
  }
});
