import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Input from '../components/formUtility/Input';
import { Colors } from '../constants/styles';
import Button from '../components/ui/Button';
import FlatButton from '../components/ui/FlatButton';
import { register, sendOtp } from '../services/authServices';

export default function SignupScreen({ navigation, routes }) {
    const [isOtpSent, setIsOtpSent] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        otp: ""
    })

    const [formInvalid, setFormInvalid] = useState({
        firstName: false,
        lastName: false,
        email: false,
        mobileNumber: false,
        otp: false
    }) ;

    const submitHandler = () => {
        if (isOtpSent) {
            if (formData.otp.length < 4) {
                setFormInvalid({
                    ...formInvalid,
                    otp: true
                })
                return;
            }

            console.log("register api call start...");

            register(formData);

            console.log("register api call end...");

            setFormData({
                firstName : "",
                lastName: "",
                email : "",
                mobileNumber : "",
                otp : ""
            })

        } else {
            if(!formData.firstName || !formData.email || !formData.mobileNumber) {
                 setFormInvalid({
                    firstName: !formData.firstName,
                    email: !formData.email,
                    mobileNumber: !formData.mobileNumber,
                 })

                return;
            }

            if (formData.firstName && formData.email && formData.mobileNumber) {
                setFormInvalid({
                    firstName: false,
                    email: false,
                    mobileNumber: false,
                })
            }

            console.log("email : " , formData.email);

            //otp Service...
            sendOtp({ email: formData.email });
            
            setIsOtpSent(true)
        }
    };


    const switchAuthModeHandler = () => {
        navigation.navigate("Login")
    }

    //update form data while typing in input field..
    const updateFormData = (type, value) => {
        setFormData((prev) => {
            return {
                ...prev,
                [type]: value
            }
        })
    }

    return (
        <View style={styles.authContent}>
            <View style={styles.form}>
                <View>
                    <View>
                        {!isOtpSent &&
                            <>
                                <Input
                                    label="First Name *"
                                    keyboardType="default"
                                    secure={false}
                                    onUpdateValue={(val) => {
                                        updateFormData("firstName", val)
                                    }}
                                    value={formData.firstName}
                                    isInvalid={formInvalid.firstName}
                                />

                                <Input
                                    label="LastName"
                                    keyboardType="default"
                                    secure={false}
                                    onUpdateValue={(val) => {
                                        updateFormData("lastName", val)
                                    }}
                                    value={formData.lastName}
                                    isInvalid={false}
                                />

                                <Input
                                    label="Email Address *"
                                    keyboardType="email-address"
                                    secure={false}
                                    onUpdateValue={(val) => {
                                        updateFormData("email", val)
                                    }}
                                    value={formData.email}
                                    isInvalid={formInvalid.email}
                                />

                                <Input
                                    label="Mobile Number *"
                                    keyboardType="number-pad"
                                    secure={false}
                                    onUpdateValue={(val) => {
                                        updateFormData("mobileNumber", val)
                                    }}
                                    value={formData.mobileNumber}
                                    isInvalid={formInvalid.mobileNumber}
                                />
                            </>
                        }

                        {
                            isOtpSent && <Input
                                label="OTP *"
                                keyboardType="number-pad"
                                secure={false}
                                onUpdateValue={(val) => {
                                    updateFormData("otp", val)
                                }}
                                value={formData.otp}
                                isInvalid={formInvalid.otp}
                            />
                        }
                        <Button onPress={submitHandler}>
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