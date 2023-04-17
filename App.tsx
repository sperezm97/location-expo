import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonPermission from './src/components/ButtonPermission'
import * as TaskManager from 'expo-task-manager';

const LOCATION_TASK_NAME = 'background-location-task';

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    console.log("errpor backgroudn location", error)
    // Error occurred - check `error.message` for more details.
    return;
  }

  if (data) {
    setInterval(() => {
      const { locations } = data;
      console.log("location", locations)
      
    }, 750)

    // do something with the locations captured in the background
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <ButtonPermission/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
