import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Theme from '../../utils/theme'
import { Label } from '@react-navigation/elements'
import { TextInput } from 'react-native'
import { Link } from 'expo-router'

const Signup = () => {
    const [name, setName] = useState("");

    // http://192.168.0.126:4000/auth/signup

    useEffect(() => {
        
    }, [])

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Sign up</Text>
                    <Text style={styles.signupPara}>Hey! Welcome to the Todo Application!</Text>
                </View>
                {/* Form */}
                <View style={styles.formContainer}>
                    <View style={styles.formItem}>
                        <Label style={styles.label}>Name</Label>
                        <TextInput placeholderTextColor="#999"
                            style={styles.input}
                            placeholder='Enter your name' />
                    </View>
                    <View style={styles.formItem}>
                        <Label style={styles.label}>Email</Label>
                        <TextInput placeholderTextColor="#999"
                            style={styles.input}
                            placeholder='example@gmail.com' />
                    </View>
                    <View style={styles.formItem}>
                        <Label style={styles.label}>Password</Label>
                        <TextInput placeholderTextColor="#999"
                            style={styles.input}
                            placeholder='Password'
                            secureTextEntry={true} />
                    </View>
                </View>
                {/* Buttons */}
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Create Account</Text>
                </TouchableOpacity>
                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already have an account?</Text>
                    <Link href="/Login">
                        <Text style={styles.footerLink}>Login</Text>
                    </Link>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Signup

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#ffff"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 24
    },
    textWrapper: {
        marginBottom: 32
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 8,
        color: Theme.colors.primary || "#333"
    },
    signupPara: {
        fontSize: 14,
        color: "#787070",
        textAlign: "center"
    },
    formContainer: {
        marginBottom: 24,
    },
    formItem: {
        marginBottom: 16
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 6,
        textAlign: "left"
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 14,
        color: "#000"
    },
    btn: {
        backgroundColor: Theme.colors.primary || "#4f46e5",
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: "center",
    },
    btnText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600"
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 8,
        gap: 5
    },
    footerText: {
        fontSize: 14,
        color: "#555",
    },
    footerLink: {
        fontSize: 14,
        fontWeight: "600",
        color: Theme.colors.primary || "#4f46e5"
    }
})