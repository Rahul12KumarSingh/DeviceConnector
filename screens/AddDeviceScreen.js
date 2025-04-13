
import React from 'react'
import { Pressable, Text, View, StyleSheet, Image } from 'react-native'
import deviceIcons from '../assets/icons/deviceicon.png'

export default function AddDeviceScreen({ navigation, routes }) {
    const onPressHandler = () => {
        navigation.navigate('AddDevicePopup')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register Your Device</Text>
            <Text style={styles.subtitle}>
                Add your device below to begin managing and monitoring it in real-time.
            </Text>

            <View style={styles.card}>
                <Image
                    source={deviceIcons}
                    style={styles.deviceIcon}
                />

                <Pressable
                    android_ripple={{ color: '#ffffff20', borderless: false }} style={({ pressed }) => [
                        styles.button,
                        pressed && styles.buttonPressed,
                    ]}
                    onPress={onPressHandler}
                >
                    <Text style={styles.plus}>+</Text>
                    <Text style={styles.buttonText}>ADD DEVICE</Text>
                </Pressable>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#050505',
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1493f0',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#f4fafa',
        textAlign: 'center',
        marginBottom: 30,
    },
    card: {
        borderRadius: 16,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        borderWidth: 5,
        borderColor: '#4A90E2',
    },
    deviceIcon: {
        width: 80,
        height: 80,
        marginBottom: 20,
        tintColor: '#4A90E2',
    },
    button: {
        backgroundColor: '#4A90E2',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
    },
    buttonPressed: {
        opacity: 0.85,
    },
    plus: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});
