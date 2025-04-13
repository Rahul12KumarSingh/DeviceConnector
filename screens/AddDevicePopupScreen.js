import React, { useState } from 'react';
import { Text, StyleSheet, View, Pressable } from 'react-native';
import Input from '../components/formUtility/Input';
import { Picker } from '@react-native-picker/picker';
import Button from '../components/ui/Button';


//   label,
//   keyboardType,
//   secure,
//   onUpdateValue,
//   value,
//   isInvalid,

export default function AddDevicePopupScreen({ navigation }) {

  const [selectedType, setSelectedType] = useState('');
  const [deviceName, setDeviceName] = useState('');

  const handleClose = () => {
    navigation.goBack();
  };

  const handleDeviceRegister = () => {
    //make api call to register device

    console.log('Device Name:', deviceName);
    console.log('Device Type:', selectedType);

    setDeviceName('');
    setSelectedType('');
  }


  return (
    <Pressable style={styles.overlay} onPress={handleClose}>
      <Pressable style={styles.popupCard} onPress={() => { }}>
        <Text style={styles.title}>Register Device</Text>

        <Input
          label="Device Name"
          keyboardType="default"
          secure={false}
          onUpdateValue={(value) => { setDeviceName(value) }}
          value={deviceName}
        />

        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedType}
            onValueChange={(itemValue) => setSelectedType(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Device Type" value="" />
            <Picker.Item label="Type-0 example-Bulb" value="0" />
            <Picker.Item label="type-1 example-fan" value="1" />
            <Picker.Item label="type-2 example-anysensors" value="2" />
          </Picker>
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={handleDeviceRegister} >
           <Text> Submit</Text>
          </Button>
        </View>

      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#383b3a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  popupCard: {
    backgroundColor: '#050e11',
    borderRadius: 20,
    padding: 25,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },

  pickerWrapper: {
    marginTop: 20,
  },

  picker: {
    backgroundColor: '#f9beda',
    borderRadius: 10,
  },

  buttonContainer: {
    marginTop: 20,
  },
});
