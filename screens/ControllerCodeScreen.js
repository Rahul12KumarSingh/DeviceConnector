import React, { useState } from 'react'
import { Pressable, Text, View, StyleSheet, ScrollView } from 'react-native'
import Button from '../components/ui/Button';
import { Alert } from 'react-native';





export default function ControllerCodeScreen() {
  const [isCopyClicked, setIsCopyClicked] = useState(false)
  const [isDownloadClicked, setIsDownloadClicked] = useState(false)


  const copyCodeHandler = () => {
    // alert('Code Copied to Clipboard!')
    Alert.alert('Code Copied to Clipboard!')
    setIsCopyClicked(true)

    setInterval(()=>{
      setIsCopyClicked(false)
    } , 10000);

  }

  const DownloadCodeHandler = () => {
    Alert.alert('Download Started!!')
    setIsDownloadClicked(true);

  }



  const controllerCode = `
    #include<Arduino.h>
    #include<WiFi.h>
    #include<PubSubClient.h>

    #include<Servo.h>
    #define SERVO_PIN 23

    Servo myServo;

    const char* ssid = "your-SSID";

    const char* password = "your-PASSWORD";
    const char* mqttServer = "broker.hivemq.com"

    #include<Arduino.h>
    #include<WiFi.h>
    #include<PubSubClient.h>

    #include<Servo.h>
    #define SERVO_PIN 23

    Servo myServo;

    const char* ssid = "your-SSID";

    const char* password = "your-PASSWORD";
    const char* mqttServer = "broker.hivemq.com"

    #include<Arduino.h>
    #include<WiFi.h>
    #include<PubSubClient.h>

    #include<Servo.h>
    #define SERVO_PIN 23

    Servo myServo;

    const char* ssid = "your-SSID";

    const char* password = "your-PASSWORD";
    const char* mqttServer = "broker.hivemq.com"

    #include<Arduino.h>
    #include<WiFi.h>
    #include<PubSubClient.h>

    #include<Servo.h>
    #define SERVO_PIN 23

    Servo myServo;

    const char* ssid = "your-SSID";

    const char* password = "your-PASSWORD";
    const char* mqttServer = "broker.hivemq.com"
  `



  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Custumized controller Code
        </Text>

        <Text style={styles.subtitle}>
          Use this code to control your device .
        </Text>
      </View>


      <ScrollView style={styles.codeBox}>
        <Text style={styles.codeText}>
          {controllerCode}
        </Text>
      </ScrollView>

      <View style={styles.buttonGroup}>
        <Button onPress={copyCodeHandler}>
          <Text>
           {  !isCopyClicked ?  "Copy Code" : "Copied!"}
          </Text>
        </Button>

        <Button onPress={DownloadCodeHandler}>
          <Text>
           { !isDownloadClicked ? "Download Code" : "Downloading..."}
          </Text>
        </Button>

      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  titleContainer: {
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#cccccc',
    marginBottom: 14,
    textAlign: 'center',
  },
  codeBox: {
    backgroundColor: '#343535',
    padding: 16,
    paddingLeft: 0 ,
    borderRadius: 8,
    borderColor: '#89b5fa',
    borderWidth: 5,
    marginBottom: 24,
    maxHeight: 500,
    // overflow: 'hidden',
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: '#e0e0e0',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#2a73e0',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});