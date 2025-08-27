import { StyleSheet, Text, View, TextInput } from 'react-native'
import Theme from '../utils/theme';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';
import Toast from 'react-native-toast-message';

const Modal = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        Toast.show({
            type: "success",
            text1: "Todo",
            text2: "Your todo added successfully!",
            props: { style: { backgroundColor: Theme.colors.primary } }
        });
    }

    return (
        <>
            <View style={styles.container}>
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
                            <TouchableOpacity style={[styles.button, styles.cancelBtn]} >
                                <Link href="../" >
                                    <Text style={styles.buttonText}>Cancel</Text>
                                </Link>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.addBtn]}>
                                <Text style={styles.buttonText} onPress={handleSubmit}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <Toast position='top' />
        </>
    )
}

export default Modal

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#00000070",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "#00000070",
        alignItems: "stretch",
        justifyContent: "center"
    },
    modalContainer: {
        width: '85%',
        backgroundColor: 'white',
        margin: "auto",
        borderRadius: 12,
        padding: 20,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Theme.colors.primary,
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginBottom: 12,
        fontSize: 16,
    },
    textarea: {
        height: 80,
        textAlignVertical: 'top',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
        gap: 10,
    },
    button: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
    },
    cancelBtn: {
        backgroundColor: '#ccc',
    },
    addBtn: {
        backgroundColor: Theme.colors.primary,
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
    },
})

