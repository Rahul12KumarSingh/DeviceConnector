import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Input from '../components/formUtility/Input';
import { Colors } from '../constants/styles';
import Button from '../components/ui/Button';
import FlatButton from '../components/ui/FlatButton';

export default function SignupScreen({ navigation, routes }) {
    const [isOtpSent, setIsOtpSent] = useState(false);

    const submitHandler = () => {
        if (isOtpSent) {
            // verify otp
        } else {
            // send otp
            setIsOtpSent(true)
        }
    };


    const switchAuthModeHandler = () => {
        navigation.navigate("Login")
    }

    return (
        <View style={styles.authContent}>
            <View style={styles.form}>
                <View>
                    <View>
                        {!isOtpSent &&
                            <Input
                                label="Email Address"
                                keyboardType="email-address"
                                secure={false}
                                onUpdateValue={() => { }}
                                value=""
                                isInvalid={false}
                            />
                        }

                        {!isOtpSent &&
                            <Input
                                label="Full Name"
                                keyboardType="default"
                                secure={false}
                                onUpdateValue={() => { }}
                                value=""
                                isInvalid={false}
                            />
                        }

                        {!isOtpSent &&
                            <Input
                                label="Mobile Number"
                                keyboardType="number-pad"
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


                        <Button  onPress={submitHandler}>
                            {!isOtpSent ? "Verify Email" : "Verify Otp"}
                        </Button>
                    </View>
                </View>
            </View>

            <View style={styles.buttons}>
                <View style={styles.buttons}>
                    {!isOtpSent &&
                        <FlatButton onPress={switchAuthModeHandler}>
                            Log in instead
                        </FlatButton>
                    }

                    {isOtpSent &&
                        <FlatButton onPress={() => { }}>
                            ReSend OTP 
                        </FlatButton>
                    }
                </View>
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
})