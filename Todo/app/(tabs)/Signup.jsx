import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Theme from '../../utils/theme'
import { Label } from '@react-navigation/elements'
import { TextInput } from 'react-native-web'

const Signup = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Sing up</Text>
                    <Text style={styles.signupPara}>Hey! Welcome back you have been missed</Text>
                </View>
                {/* Form */}
                <View style={styles.formContainer}>
                    <View style={styles.formItem}>
                        <Label>Email</Label>
                        <TextInput placeholder='example@gmail.com' />
                    </View>
                    <View style={styles.formItem}>
                        <Label>Password</Label>
                        <TextInput placeholder='Password' secureTextEntry={true} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 25,
        fontWeight: 600,
        textAlign: "center",
        marginBottom: 8
    },
    signupPara: {
        fontSize: 12,
        color: "#787070",
        textAlign: "center"
    },
    formContainer: {},
    formItem: {}
})