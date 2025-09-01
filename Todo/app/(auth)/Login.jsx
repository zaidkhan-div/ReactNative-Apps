import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Theme from '../../utils/theme'
import { Label } from '@react-navigation/elements'
import { TextInput } from 'react-native'
import { Link } from 'expo-router'
import Toast from 'react-native-toast-message'
import { signInStart, signInSucces, signInFailure } from '../../features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ActivityIndicator } from 'react-native'

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.user);

    const handleSubmit = async () => {
        try {
            if (formData.email.trim() && formData.password.trim()) {
                dispatch(signInStart())
                const response = await fetch("192.168.0.126:4000/auth/signup", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(formData)
                });
                if (response.ok) {
                    Toast.show({
                        type: "success",
                        text1: "Login Successfully",
                        text2: "Welcome back!"
                    });
                }
                setFormData({
                    email: "",
                    password: ""
                })
                dispatch(signInSucces());
            }
        } catch (error) {

        }

    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Login</Text>
                    <Text style={styles.signupPara}>Login to your account!</Text>
                </View>
                {/* Form */}
                <View style={styles.formContainer}>
                    <View style={styles.formItem}>
                        <Label style={styles.label}>Email</Label>
                        <TextInput value={formData.email} onChangeText={(text) => setFormData({ ...formData, password: text })} placeholderTextColor="#999"
                            style={styles.input}
                            placeholder='example@gmail.com' />
                    </View>
                    <View style={styles.formItem}>
                        <Label style={styles.label}>Password</Label>
                        <TextInput value={formData.password} onChangeText={(text) => setFormData({ ...formData, email: text })} placeholderTextColor="#999"
                            style={styles.input}
                            placeholder='Password'
                            secureTextEntry={true} />
                    </View>
                </View>
                {/* Buttons */}
                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                    {
                        loading ?
                            <ActivityIndicator animating={true} />
                            :
                            <Text style={styles.btnText}>Login</Text>

                    }
                </TouchableOpacity>
                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Did not have an account login?</Text>
                    <Link href="/Signup">
                        <Text style={styles.footerLink}>Sign up</Text>
                    </Link>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Login

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