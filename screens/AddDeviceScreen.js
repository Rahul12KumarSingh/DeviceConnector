
import React from 'react'
import { Pressable, Text, View } from 'react-native'

export default function AddDeviceScreen({ navigation, route }) {
    const onPressHandler = () => {
        navigation.navigate('addDevicePopup')
    }

    return (
        <View>
            <Text>
                Register your device here.
            </Text>

            <View>
                <Pressable onPress={onPressHandler}>
                    <Text>+</Text>
                    <Text>ADD DEVICE</Text>
                </Pressable>
            </View>
        </View>
    )
}
