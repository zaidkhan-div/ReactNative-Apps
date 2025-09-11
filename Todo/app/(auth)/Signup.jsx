import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Theme from '../../utils/theme'
import { Label } from '@react-navigation/elements'
import { TextInput } from 'react-native'
import { Link, useRouter } from 'expo-router'
import axios from 'axios'
import Toast from 'react-native-toast-message'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, signInFailure, signInSucces } from "../../features/userSlice"
import { ActivityIndicator } from 'react-native'

const Signup = () => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const router = useRouter();
    const { loading, error: errorMessage } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    // 2. The problem
    // When you type in Name, you want to update only name but keep email and password safe.
    // If you wrote this:
    // setFormData({ name: text });
    // ❌ Wrong — because now state becomes:
    // { name: "Zaid" }
    // 👉 and email + password are lost (removed).
    // 3. The solution → ...formData
    // ...formData means:
    // “copy everything from the old state”.
    // So this:
    // setFormData({ ...formData, name: text });
    //     setFormData({ ...formData, name: text });
    // Here:
    // ...formData → copies everything already inside formData (email, password, etc.)
    // name: text → updates only the name field.
    // So the new state becomes:
    // { name: "Zaid", email: "oldEmail", password: "oldPassword" }

    // http://192.168.0.126:4000/auth/signup

    const handleSubmit = async () => {
        if (!formData.username || !formData.email || !formData.password) {
            dispatch(signInFailure("Please enter your details!"));
            return
        }
        try {
            if (formData.username.trim() && formData.email.trim() && formData.password.trim()) {
                dispatch(signInStart());
                const response = await axios.post("http://192.168.100.222:4000/auth/signup", formData);
                if (response.status === 201 || response.status === 200) {
                    Toast.show({
                        type: "success",
                        text1: "Singup successfully!",
                        text2: "Welcome to the Todo Application"
                    });
                    setFormData({
                        username: "",
                        email: "",
                        password: ""
                    });
                    dispatch(signInSucces());
                }
                console.log(response, "response");
                router.push("/Login");

            }

        } catch (error) {
            Toast.show({
                type: "error",
                text1: "Invalid Credential!",
                text2: error.message
            });
            dispatch(signInFailure("Something went wrong!"));
        } finally {
            dispatch(signInFailure());
        }
    }

    return (
        <KeyboardAvoidingView style={styles.safeArea} behavior={Platform.OS === "ios" ? "padding" : "height"}>
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
                            value={formData.username}
                            onChangeText={(text) => setFormData({ ...formData, username: text })}
                            style={styles.input}
                            placeholder='Enter your name' />
                    </View>
                    <View style={styles.formItem}>
                        <Label style={styles.label}>Email</Label>
                        <TextInput placeholderTextColor="#999"
                            value={formData.email}
                            onChangeText={(text) => setFormData({ ...formData, email: text })}
                            style={styles.input}
                            placeholder='example@gmail.com' />
                    </View>
                    <View style={styles.formItem}>
                        <Label style={styles.label}>Password</Label>
                        <TextInput placeholderTextColor="#999"
                            value={formData.password}
                            style={styles.input}
                            onChangeText={(text) => setFormData({ ...formData, password: text })}
                            placeholder='Password'
                            secureTextEntry={true} />
                    </View>
                    {errorMessage ? <Text style={{ color: "red", fontSize: 12 }}>{errorMessage}</Text> : ""}
                </View>
                {/* Buttons */}
                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                    {
                        loading ?
                            <ActivityIndicator animating={true} color={Theme.colors.white} />
                            :
                            <Text style={styles.btnText}>Create Account</Text>
                    }

                </TouchableOpacity>
                {/* Footer */}

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already have an account?</Text>
                    <Link href="/Login">
                        <Text style={styles.footerLink}>Login</Text>
                    </Link>
                </View>
            </View>
        </KeyboardAvoidingView>
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