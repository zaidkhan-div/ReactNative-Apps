import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from "react-native-vector-icons/Entypo";
import NewIcon from "react-native-vector-icons/Ionicons";
import PerfectSize from "../utils/PerfectSize";
import Theme from '../utils/theme.js'
import { Link } from 'expo-router';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { useGetTodosQuery } from "../features/ApiCalling"
import { setTodo } from '@/features/TodoSlice';

const Welcome = () => {
    const [inputVal, setInputVal] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { data: todosData, isLoading, isSuccess } = useGetTodosQuery();
    console.log(todosData, "TodosRTK");
    let todos = useSelector((state) => state.todoSlice.todo);

    useEffect(() => {
        // const fetchData = async () => {
        //     try {
        //         // setLoading(true);
        //         const response = await axios.get("http://192.168.0.119:3000/todos");
        //         setTimeout(() => {
        //             setData(response.data);
        //             setLoading(false);
        //         }, 3000);
        //     } catch (error) {
        //         console.log(error.message);
        //         setLoading(false);
        //     }
        // }
        // fetchData();
        if (isSuccess) {
            dispatch(setTodo(todosData))
        }
    }, [todosData]);

    // const searchTodos = data.filter((item) => {
    //     if (inputVal.trim()) {
    //         const input = inputVal.toLowerCase();
    //         return item?.title.toLowerCase().includes(input);
    //     } else {
    //         return item
    //     }
    // });

    const searchTodos = todos.filter((item) => {
        if (inputVal.trim()) {
            const input = inputVal.toLowerCase();
            return item?.title.toLowerCase().includes(input);
        } else {
            return item
        }
    }).reverse();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                {/* <View style={styles.iconsContainer}>
                    <TouchableOpacity style={styles.menuWrapper}>
                        <Link href="/Menu">
                            <Icon name="menu" size={30} color={Theme.colors.primary} />
                        </Link>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.analyticWrapper}>
                        <Link href="/Analytics">
                            <NewIcon name="analytics-sharp" size={30} color={Theme.colors.primary} />
                        </Link>
                    </TouchableOpacity>
                </View> */}

                <View style={styles.inputContainer}>
                    {/* <View style={styles.inputWrapper}> */}
                    <TextInput
                        style={[styles.input]}
                        placeholder='Search Todo...'
                        value={inputVal}
                        onChangeText={(text) => setInputVal(text)}
                    />
                    {/* </View>  */}
                    {/* <TouchableOpacity style={styles.btnWrapper}>
                        <Text style={styles.btn}>Add Todo</Text>
                    </TouchableOpacity> */}
                </View>
            </View>

            <View style={styles.container}>
                {isLoading ? (
                    // <Text style={styles.loading}>Loading...</Text>
                    <View style={styles.loader}>
                        <ActivityIndicator size="large" color={Theme.colors.primary} />
                    </View>
                ) : (
                    // searchTodos?.map((item, index) => (
                    //     <View key={index} style={styles.todoCard}>
                    //         {/* <CheckBox
                    //             value={item?.completed}
                    //             onValueChange={(value) => handleCheckbox(value, item)}
                    //         /> */}
                    //         <View style={styles.todoContent}>
                    //             <Text style={styles.todoTitle}>{item?.title}</Text>
                    //             <Text style={styles.todoDescription}>{item?.description}</Text>

                    //             {/* <View style={styles.badgeContainer}>
                    //                 <Text
                    //                     style={[
                    //                         styles.priorityBadge,
                    //                         item?.priority === 'high' ? styles.priorityHigh : styles.priorityNormal
                    //                     ]}
                    //                 >
                    //                     {item?.priority}
                    //                 </Text>
                    //                 <Text style={styles.badge}>Due: {item?.dueDate}</Text>
                    //                 <Text style={styles.badge}>Estimated: {item?.estimatedHours}</Text>
                    //             </View> */}
                    //         </View>
                    //     </View>
                    // ))
                    <FlatList
                        data={searchTodos}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.todoCard}>
                                <View style={styles.todoContent}>
                                    <Text style={styles.todoTitle}>{item?.title}</Text>
                                    <Text style={styles.todoDescription}>{item?.description}</Text>
                                </View>
                            </View>
                        )}
                    />
                )}
            </View>
        </SafeAreaView>
    )
}
export default Welcome;


const styles = StyleSheet.create({
    iconsContainer: {
        flexDirection: "row",
        paddingHorizontal: 5,
        justifyContent: "space-between",
        alignItems: "center",
    },
    menuWrapper: {
        cursor: "pointer"
    },
    analyticWrapper: {
        cursor: "pointer"
    },
    inputContainer: {
        marginTop: 13,
        display: "flex",
        flexDirection: "row",
        width: "100%",
        gap: 10,
        paddingHorizontal: 5,
    },
    inputWrapper: {
        flex: 1
    },
    input: {
        color: "black",
        fontSize: 16,
        flex: 1,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: PerfectSize(20),
        paddingVertical: 10,
        paddingHorizontal: 10,
        outline: "none"
    },
    btnWrapper: {},
    btn: {
        backgroundColor: Theme.colors.primary,
        color: "white",
        fontSize: 18,
        padding: 10,
        borderRadius: PerfectSize(20),
        cursor: "pointer"
    },
    // This is for the TodosContainer
    container: {
        marginTop: 10,
        flex: 1,
    },
    loading: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 30,
    },
    loader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    todoCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
        paddingVertical: 15,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 15,
        gap: 10,
    },
    todoContent: {
        flex: 1,
        flexDirection: 'column',
        gap: 6,
    },
    todoTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },
    todoDescription: {
        fontSize: 14,
        color: '#6b7280',
    },
    badgeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginTop: 5,
    },
    badge: {
        backgroundColor: '#f3f4f6',
        color: '#6b7280',
        fontSize: 12,
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 15,
        overflow: 'hidden',
    },
    priorityBadge: {
        fontSize: 12,
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 15,
        overflow: 'hidden',
    },
    priorityHigh: {
        backgroundColor: '#fee2e2',
        color: '#ef4444',
    },
    priorityNormal: {
        backgroundColor: '#f3f4f6',
        color: '#6b7280',
    },
})