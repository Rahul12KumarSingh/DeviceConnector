import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { StyleSheet } from 'react-native'


export default function DeviceListItem({ DeviceInfo, onPress }) {

    return (
        <View style={[styles.gridItem, { backgroundColor: color }]}>
            <Pressable android_ripple={{ color: '#ccc' }} style={(pressed) => [styles.button, pressed ? styles.buttonPressed : null]} onPress={onPress} >
                <View style={[styles.innerGridItem, { backgroundColor: color }]}>
                    <Text>{DeviceInfo?.name}</Text>
                </View>
            </Pressable>
        </View>
    )
}



const styles = StyleSheet.create({
    gridItem :{
      flex: 1 ,
      margin: 16,
      height: 150,
      borderRadius: 8,
      elevation: 4,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      overflow: 'hidden',
    } ,
    button : {
      flex : 1 
    }  ,

    buttonPressed : {
      opacity: 0.5
    } ,

    innerGridItem :{
      flex:1 ,
      padding:16 ,
      justifyContent:'center',
      alignItems:'center',
    }
});