import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'

export default function DocumentationScreen() {
  return (
    <ScrollView >
       <Text style={styles.title}>Device Setup Documentation</Text>
       
      <View style={styles.stepContainer}>
        <Text style={styles.stepTitle}>Step: 1</Text>
        <Text style={styles.stepText} >
          Add the Device by clicking on the add device button and fill the form with the device name and type. click on register device button to register the device.

          {'\n'}

          You can add multiple devices by clicking on the add device button again and fill the form with the device name and type. click on register device button to register the device.
        </Text>
      </View>

      <View style={styles.stepContainer}>
        <Text style={styles.stepTitle}>Step: 2</Text>
        <Text style={styles.stepText}>
          After registering the device, navigate to the GET-CODE screen and copy / Download  the code.

          {'\n'}
          With the help of USB cable upload this code to the microController(ESp32) board using Arduino IDE or VS code . or Go to my nearest DeviceContr Service Center to get All the Setup Done .
          {'\n'}
          {'\n'}
          🔔 <Text style={styles.note}>Note:</Text>  Make sure to change the WiFi credentials in the code before uploading it to the microController(ESP32).
        </Text>
      </View>

      <View style={styles.stepContainer}>
        <Text style={styles.stepTitle}>Step: 3</Text>

        <Text style={styles.stepText}>
          Now connect the microcontroller (ESP32) to the device you want to control. For example, if you want to control a bulb/fan, connect the microcontroller (ESP32) to the bulb using the GPIO pin mentioned in the code, with the help of a relay module.
          {'\n'}
        </Text>
      </View>


      <View style={styles.stepContainer}>
        <Text style={styles.stepTitle}>Step: 4</Text>
        <Text style={styles.stepText}>
          Now you are ready to use. Go to the home screen and click on the device you want to control. You will see the control screen where you can control the device & Real time Status of the device will be shown on the screen.
          {'\n'}
        </Text>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  stepContainer: {
    marginBottom: 24,
    backgroundColor: '#1a1a1a',
    padding: 16,
    borderRadius: 10,
    borderColor: '#333',
    borderWidth: 1,
  },
  stepTitle: {
    color: '#4A90E2',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  stepText: {
    color: '#dcdcdc',
    fontSize: 15,
    lineHeight: 22,
  },
  note: {
    color: '#FF6B6B',
    fontWeight: 'bold',
  },
});