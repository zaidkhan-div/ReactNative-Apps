import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackIcon from "react-native-vector-icons/Ionicons"
import Theme from "../utils/theme";
import { useLocalSearchParams, useRouter } from "expo-router";

const ChatScreen = () => {
    const router = useRouter();
    const { name } = useLocalSearchParams();
    const [text, setText] = useState("");

    const sendMessage = () => {
        console.log(text)
    }

    return (

        <KeyboardAvoidingView style={styles.safeAre} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableOpacity onPress={() => router.back()} style={styles.topBar}>
                <BackIcon name="chevron-back" size={30} color={Theme.colors.primary} />
                <Text style={styles.userName}>{name}</Text>
            </TouchableOpacity>
            {/* Messages */}

            {/* InputButton */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type a message..."
                    value={text}
                    onChangeText={setText}
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>Send</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}
export default ChatScreen;

const styles = StyleSheet.create({
    safeAre: {
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: 10
    },
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    },
    userName: {
        fontSize: 18,
        fontWeight: "600",
    },

    // inputContainer
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 5,
        gap: 10
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: "#fff",
    },
    sendButton: {
        backgroundColor: Theme.colors.primary,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
        width: 80,
    },

})