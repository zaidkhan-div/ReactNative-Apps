import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { useState } from "react";
import BackIcon from "react-native-vector-icons/Ionicons";
import Theme from "../utils/theme";
import { useLocalSearchParams, useRouter } from "expo-router";

const ChatScreen = () => {
    const router = useRouter();
    const { name } = useLocalSearchParams();
    const [text, setText] = useState("");

    const sendMessage = () => {
        console.log(text);
        setText("");
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
            >
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <BackIcon name="chevron-back" size={30} color={Theme.colors.primary} />
                    </TouchableOpacity>
                    <Text style={styles.userName}>{name}</Text>
                </View>

                {/* Messages or placeholder */}
                <View style={styles.messagesContainer}>
                    {/* Replace with FlatList for actual messages */}
                </View>

                {/* Input Field */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Type a message..."
                        value={text}
                        onChangeText={setText}
                    />
                    <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                        <Text style={styles.sendText}>Send</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    backButton: {
        marginRight: 8,
    },
    userName: {
        fontSize: 18,
        fontWeight: "600",
    },
    messagesContainer: {
        flex: 1,
        padding: 10,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderTopWidth: 1,
        borderColor: "#eee",
        backgroundColor: "#fff",
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
        marginLeft: 8,
    },
    sendText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
});