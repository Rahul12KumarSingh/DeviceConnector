import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Input from '../components/formUtility/Input'
import { Colors } from '../constants/styles'
import { useState } from 'react'
import Button from '../components/ui/Button'
import FlatButton from '../components/ui/FlatButton'



/*
props require to the  input component
label,
keyboardType,
secure,
onUpdateValue,
value,
isInvalid,
*/

export default function LoginScreen({ navigation, router }) {

    const [isOtpSent, setIsOtpSent] = useState(false)

    const submitHandler = () => {
        if (isOtpSent) {
            // verify otp
        } else {
            // send otp
            setIsOtpSent(true)
        }
    }

    const switchAuthModeHandler = () => {
        navigation.navigate("Singup")
    }

    return (
        <View style={styles.authContent}>
            <View style={styles.form}>
                <View>
                    <View>
                        {!isOtpSent && <Input
                            label="Email Address"
                            keyboardType="email-address"
                            secure={false}
                            onUpdateValue={() => { }}
                            value=""
                            isInvalid={false}
                        />
                        }

                        {
                            isOtpSent && <Input
                                label="OTP"
                                keyboardType="number-pad"
                                secure={false}
                                onUpdateValue={() => { }}
                                value=""
                                isInvalid={false}
                            />
                        }

                        <View style={styles.buttons}>
                            <Button onPress={submitHandler}>
                                {!isOtpSent ? "GET OTP" : "VERIFY OTP"}
                            </Button>
                        </View>

                    </View>
                </View>
            </View>

            <View style={styles.buttons}>
                {  !isOtpSent &&
                    <FlatButton onPress={switchAuthModeHandler}>
                      Create a new account
                    </FlatButton>
                }

                {  isOtpSent &&
                    <FlatButton onPress={()=> {setIsOtpSent(false)}}>
                      ReEnter the Email
                   </FlatButton>
                }
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    authContent: {
        marginTop: 64,
        marginHorizontal: 32,
        padding: 16,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.35,
        shadowRadius: 4,
    },
    buttons: {
        marginTop: 8,
    },
});