import React, { useContext } from 'react'
import { Text, StyleSheet, FlatList, View } from 'react-native'
import deviceContext from '../store/device-context'


export default function HomeScreen({ navigation, router }) {
    const deviceCtx = useContext(deviceContext)

    useEffect(() => {
        getDeviceService();  // Fetch the devices from the server and update the context....
    }, []);

    const renderDevice = (deviceInfo) => {

        const pressHandler = ()=> {
             navigation.navigate('DeviceDetailScreen' , {
                deviceId : deviceInfo.id,
             });
        }

        return (
           <DeviceListItem  deviceinfo={deviceInfo}  onPress = {pressHandler}  />
        )
    }

    if (deviceCtx.device.length == 0) {
        return (
            <View>
                <Text style={styles.text}>
                    No devices added yet.
                </Text>

                <Text>
                    Please add a device to get started.
                </Text>
            </View>
        )
    }

    return (
        <FlatList
            data={deviceCtx.device}
            keyExtractor={(item) => item.id}
            renderItem={renderDevice}
            numColumns={2}
        />
    )
}

const styles = StyleSheet.create({

});
