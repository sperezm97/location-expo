import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

import * as Location from 'expo-location';
const LOCATION_TASK_NAME = 'background-location-task';


const requestPermissions = async () => {
    console.log("Pressed")
  const { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync();
  console.log("foregroundStatus",foregroundStatus, )
  if (foregroundStatus === 'granted') {

    const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
  console.log("backgroundStatus",backgroundStatus, )

    if (backgroundStatus === 'granted') {
  console.log("backgroundStatus",backgroundStatus, )

      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Balanced,
      });
    }
  }
};

const PermissionsButton = () => (
  <View style={styles.container}>
    <Button onPress={requestPermissions} title="Enable background location" />
  </View>
);



const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}); 

export default PermissionsButton;