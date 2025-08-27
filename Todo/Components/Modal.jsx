import { StyleSheet, Text, TextInput, TouchableOpacity, View, Modal as RNModal } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Theme from '../utils/theme';
import { useState } from 'react';
import { Link } from 'expo-router';
import Toast from 'react-native-toast-message';
import { useAddTodoMutation } from '@/features/ApiCalling';

const Modal = () => {
    // const [openModal, setOpenModal] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [addNewTodo, resultObject] = useAddTodoMutation();

    const handleModal = () => {
        setOpenModal(true);
    }
    const handleSubmit = async () => {
        setOpenModal(false);
        try {
            let obj = {
                title: title,
                description: description
            }
            await addNewTodo(obj);
            setTitle("")
            setDescription("")
        } catch (error) {
            // Toast.show({
            //     type: "error",
            //     text1: "error",
            //     text2: "Something went wrong!"
            // })
            Toast.error("Something went wrong!")
        }
    }

    return (
        <>
            <TouchableOpacity onPress={handleModal} style={styles.iconWrapper} >
                {/* <Link href="/modal">
                    <Icon name="plus" size={30} color="white" />
                </Link> */}
                <Icon name="plus" size={30} color="white" />
            </TouchableOpacity>

            {/* Modal */}
            <RNModal style={styles.modalContainer} visible={openModal} animationType="fade" transparent={true}>
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
            </RNModal>
            <Toast />
        </>
    );
};

export default Modal;

const styles = StyleSheet.create({
    iconWrapper: {
        backgroundColor: Theme.colors.primary,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        position: 'absolute',
        bottom: 110,
        right: 20,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "red"
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: '#00000070',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '85%',
        backgroundColor: 'white',
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
});