import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Modal as RNModal,
    Platform,
    ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Theme from "../utils/theme";
import { useState } from "react";
import Toast from "react-native-toast-message";
import { useAddTodoMutation } from "@/features/ApiCalling";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Modal = () => {
    const [openModal, setOpenModal] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("normal");
    const [category, setCategory] = useState("general");
    const [tagsInput, setTagsInput] = useState("");
    const [dueDate, setDueDate] = useState(null);
    const [showPicker, setShowPicker] = useState(false);
    const [estimatedHours, setEstimatedHours] = useState("");

    const [addNewTodo, { isSuccess }] = useAddTodoMutation();

    const handleSubmit = async () => {
        if (!title || !description || !priority || !category || !tagsInput || !dueDate || !estimatedHours) {
            Toast.show({
                type: "error",
                text1: "Validation",
                text2: "Fill the form",
            });
            return;
        }
        try {
            const payload = {
                title: title.trim(),
                description: description.trim(),
                priority,
                category,
                tags: tagsInput
                    .split(",")
                    .map((t) => t.trim())
                    .filter(Boolean),
                dueDate: dueDate ? dueDate.toISOString().slice(0, 10) : null,
                estimatedHours: estimatedHours ? Number(estimatedHours) : null,
                completed: false,
            };

            // const token = await AsyncStorage.getItem("accessToken");
            // const response = await fetch("http://192.168.0.107:4000/tasks/create-task", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //         "Authorization": `Bearer ${token}`
            //     },
            //     body: JSON.stringify(payload)
            // })
            // const data = await response.json();

            // if (!response.ok) {
            //     throw new Error(data?.message || "Failed to create task");
            // }

            // console.log(data?.data?.newTask, "modalData");

            await addNewTodo(payload);

            Toast.show({ type: "success", text1: "Todo added!" });
            setOpenModal(false);

            setTitle("");
            setDescription("");
            setPriority("normal");
            setCategory("general");
            setTagsInput("");
            setDueDate(null);
            setEstimatedHours("");

        } catch (error) {
            Toast.show({
                type: "error",
                text1: "Error",
                text2: error?.message.tostri || "Something went wrong!",
            });
        }
    };

    return (
        <>
            {/* Floating Add Button */}
            <TouchableOpacity
                onPress={() => setOpenModal(true)}
                style={styles.iconWrapper}
            >
                <Icon name="plus" size={30} color="white" />
            </TouchableOpacity>

            {/* Modal */}
            <RNModal visible={openModal} animationType="fade" transparent>
                <View style={styles.overlay}>
                    <View style={styles.card}>
                        <ScrollView>
                            <Text style={styles.title}>Add Todo</Text>

                            {/* Title */}
                            <Text style={styles.label}>Title *</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="e.g., Design system implementation"
                                value={title}
                                onChangeText={setTitle}
                            />

                            {/* Description */}
                            <Text style={styles.label}>Description</Text>
                            <TextInput
                                style={[styles.input, styles.textarea]}
                                placeholder="Add a short description"
                                value={description}
                                onChangeText={setDescription}
                                multiline
                            />

                            {/* Priority & Category */}
                            <View style={styles.row}>
                                <View style={styles.col}>
                                    <Text style={styles.label}>Priority</Text>
                                    <View style={styles.pickerWrap}>
                                        <Picker
                                            selectedValue={priority}
                                            onValueChange={setPriority}
                                            dropdownIconColor="#6b7280"
                                        >
                                            <Picker.Item label="Normal" value="normal" />
                                            <Picker.Item label="High" value="high" />
                                            <Picker.Item label="Medium" value="medium" />
                                        </Picker>
                                    </View>
                                </View>

                                <View style={styles.col}>
                                    <Text style={styles.label}>Category</Text>
                                    <View style={styles.pickerWrap}>
                                        <Picker
                                            selectedValue={category}
                                            onValueChange={setCategory}
                                            dropdownIconColor="#6b7280"
                                        >
                                            <Picker.Item label="General" value="general" />
                                            <Picker.Item label="Development" value="development" />
                                            <Picker.Item label="Personal" value="personal" />
                                            <Picker.Item label="Work" value="work" />
                                        </Picker>
                                    </View>
                                </View>
                            </View>

                            {/* Tags */}
                            <Text style={styles.label}>Tags (comma separated)</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="react, ui, design"
                                value={tagsInput}
                                onChangeText={setTagsInput}
                                autoCapitalize="none"
                            />

                            {/* Due Date & Hours */}
                            <View style={styles.row}>
                                <View style={[styles.col, { flex: 1.2 }]}>
                                    <Text style={styles.label}>Due Date</Text>
                                    <TouchableOpacity
                                        style={styles.inputButton}
                                        onPress={() => setShowPicker(true)}
                                    >
                                        <Text style={styles.inputButtonText}>
                                            {dueDate ? dueDate.toDateString() : "Pick a date"}
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.col}>
                                    <Text style={styles.label}>Est. Hours</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="e.g., 8"
                                        keyboardType="numeric"
                                        value={estimatedHours}
                                        onChangeText={setEstimatedHours}
                                    />
                                </View>
                            </View>

                            {showPicker && (
                                <DateTimePicker
                                    value={dueDate || new Date()}
                                    mode="date"
                                    display={Platform.OS === "ios" ? "spinner" : "default"}
                                    onChange={(_, date) => {
                                        setShowPicker(false);
                                        if (date) setDueDate(date);
                                    }}
                                />
                            )}

                            {/* Actions */}
                            <View style={styles.actions}>
                                <TouchableOpacity
                                    style={[styles.button, styles.cancel]}
                                    onPress={() => setOpenModal(false)}
                                >
                                    <Text style={styles.buttonText}>Cancel</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[styles.button, styles.add]}
                                    onPress={handleSubmit}
                                >
                                    <Text style={styles.buttonText}>Add</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </RNModal>
        </>
    );
};

export default Modal;

const styles = StyleSheet.create({
    iconWrapper: {
        backgroundColor: Theme.colors.primary,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        position: "absolute",
        bottom: 70,
        right: 16,
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.45)",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        height: "100%",
        overflow: "hidden"
    },
    card: {
        width: "100%",
        maxWidth: 520,
        backgroundColor: "white",
        borderRadius: 16,
        padding: 18,
        elevation: 6,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 12,
        height: 450,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: Theme.colors.primary,
        textAlign: "center",
        marginBottom: 12,
    },
    label: {
        fontSize: 12,
        fontWeight: "600",
        color: "#6b7280",
        marginBottom: 6,
        marginTop: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: "#e5e7eb",
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 14,
        color: "#111827",
        backgroundColor: "#fff",
    },
    textarea: {
        minHeight: 90,
        textAlignVertical: "top",
    },
    row: {
        flexDirection: "row",
        gap: 12,
    },
    col: {
        flex: 1,
    },
    pickerWrap: {
        borderWidth: 1,
        borderColor: "#e5e7eb",
        borderRadius: 10,
        overflow: "hidden",
    },
    inputButton: {
        borderWidth: 1,
        borderColor: "#e5e7eb",
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 12,
        justifyContent: "center",
    },
    inputButtonText: {
        fontSize: 14,
        color: "#111827",
    },
    actions: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 10,
        marginTop: 16,
    },
    button: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 10,
    },
    cancel: {
        backgroundColor: "#d1d5db",
    },
    add: {
        backgroundColor: Theme.colors.primary,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "700",
    },
});


{/* <RNModal style={styles.modalContainer} visible={openModal} animationType="fade" transparent={true}>
    <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Add Todo</Text>

            <TextInput
                style={styles.input}
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
            />

            <TextInput
                style={[styles.input, styles.textarea]}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
                multiline
            />

            <View style={styles.actions}>
                <TouchableOpacity style={[styles.button, styles.cancelBtn]} onPress={() => setOpenModal(false)}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.addBtn]}
                    onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
</RNModal> */}