import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator, FlatList, Switch, Image, Touchable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from "react-native-vector-icons/Entypo";
import PerfectSize from "../utils/PerfectSize";
import Theme from '../utils/theme.js'
import { useDispatch, useSelector } from 'react-redux';
import { useGetTodosQuery } from "../features/ApiCalling"
import { setTodo } from '@/features/TodoSlice';
import Checkbox from 'expo-checkbox';


const Welcome = () => {
    const [inputVal, setInputVal] = useState("");
    const dispatch = useDispatch();
    const [isChecked, setChecked] = useState(false);
    const { data, isLoading, isSuccess } = useGetTodosQuery();
    let todos = useSelector((state) => state.todoSlice.todos);
    console.log({ data });

    useEffect(() => {
        if (isSuccess) {
            dispatch(setTodo(data?.data?.allTask))
        }
    }, [data]);

    const searchTodos = todos.filter((item) => {
        if (inputVal.trim()) {
            const input = inputVal.toLowerCase();
            return item?.title.toLowerCase().includes(input);
        } else {
            return item;
        }
    }).reverse();


    const handleComplete = (newValue, item) => {
        setChecked((prev) => ({
            ...prev,
            [item.id]: newValue,
        }));
    }

    return (
        <View style={{ flex: 1 }}>
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
                    <TextInput
                        style={[styles.input]}
                        placeholder='Search Todo...'
                        value={inputVal}
                        onChangeText={(text) => setInputVal(text)}
                    />
                    <TouchableOpacity style={styles.btnWrapper}>
                        <Image style={styles.userImg} source={require("../assets/images/testimonial3.jpg")} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.container}>
                {isLoading ? (
                    <View style={styles.loader}>
                        <ActivityIndicator size="large" color={Theme.colors.primary} />
                    </View>
                ) : (
                    <FlatList
                        contentContainerStyle={{ paddingHorizontal: 16 }}
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.todoCard}>
                                {/* Status */}
                                {/* <Text style={{ fontSize: 12, color: item.completed ? "green" : "red" }}>
                                    {item.completed ? "Completed" : "Pending"}
                                </Text> */}

                                <TouchableOpacity style={styles.checkBoxContainer}>
                                    <Checkbox value={isChecked[item.id]} onValueChange={(newValue) => handleComplete(newValue, item)} />
                                </TouchableOpacity>

                                {/* Content */}
                                <View style={styles.todoContent}>
                                    <Text style={styles.todoTitle}>{item.title}</Text>
                                    <Text style={styles.todoDescription}>
                                        {item.description || "No description provided"}
                                    </Text>

                                    {/* Badges (tags) */}
                                    <View style={styles.badgeContainer}>
                                        {item.tags?.map((tag, index) => (
                                            <Text key={index} style={styles.badge}>
                                                {tag}
                                            </Text>
                                        ))}
                                    </View>

                                    <View>
                                        <Text style={styles.estimatedHours}>Total Hours: {item?.estimatedHours}</Text>
                                    </View>

                                    {/* Priority Badge */}
                                    <View style={styles.badgeContainer}>
                                        <Text
                                            style={[
                                                styles.priorityBadge,
                                                item.priority === "high"
                                                    ? styles.priorityHigh
                                                    : item.priority === "medium"
                                                        ? styles.priorityMedium
                                                        : item.priority === "normal"
                                                            ? styles.priorityNormal
                                                            : null

                                            ]}
                                        >
                                            {item.priority}
                                        </Text>
                                    </View>

                                </View>
                            </View>
                        )}
                    />
                )}
            </View>
        </View >
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
        display: "flex",
        flexDirection: "row",
        width: "100%",
        gap: 10,
        paddingHorizontal: 16,
        marginTop: 10
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
        paddingVertical: 8,
        paddingHorizontal: 10,
        outline: "none"
    },
    btnWrapper: {
        width: 55,
        height: 55,
    },
    userImg: {
        width: "100%",
        height: "100%",
        borderRadius: 100
    },
    // This is for the TodosContainer
    container: {
        marginTop: 10,
        flex: 1,
    },
    loader: {
        flex: 1,
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
    checkBoxContainer: {
        marginTop: 6
    },
    todoContent: {
        flex: 1,
        flexDirection: 'column',
        gap: 6,
    },
    todoTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#1e1e2cff',
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
    estimatedHours: {
        fontSize: 12,
        color: '#1f4187ff',
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
    priorityMedium: {
        color: "#00000093",
        backgroundColor: "#cebb1588"
    },
    priorityNormal: {
        backgroundColor: '#f3f4f6',
        color: '#6b7280',
    },
})

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