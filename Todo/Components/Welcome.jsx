import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from "react-native-vector-icons/Entypo";
import NewIcon from "react-native-vector-icons/Ionicons";
import PerfectSize from "../utils/PerfectSize";
import Theme from '../utils/theme.js'

const Welcome = () => {
    const [inputVal, setInputVal] = useState("");
    console.log(inputVal);

    return (
        <>
            <SafeAreaView>
                <View style={styles.iconsContainer}>
                    <TouchableOpacity style={styles.menuWrapper}>
                        <Icon name="menu" size={30} color={Theme.colors.primary} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.analyticWrapper}>
                        <NewIcon name="analytics-sharp" size={30} color={Theme.colors.primary} />
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={[styles.input]}
                            placeholder='Enter todo...'
                            value={inputVal}
                            onChangeText={(text) => setInputVal(text)}
                        />
                    </View>
                    <TouchableOpacity style={styles.btnWrapper}>
                        <Text style={styles.btn}>Add Todo</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}
export default Welcome


const styles = StyleSheet.create({
    iconsContainer: {
        display: "fle",
        flexDirection: "row",
        paddingHorizontal: 5,
        justifyContent: "space-between",
        alignItems: "center"
    },
    menuWrapper: {
        cursor: "pointer"
    },
    analyticWrapper: {
        cursor: "pointer"
    },
    inputContainer: {
        marginTop: PerfectSize(20),
        display: "flex",
        flexDirection: "row",
        width: "100%",
        gap: 10,
        paddingHorizontal: 5
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
        padding: 10,
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
    }
})