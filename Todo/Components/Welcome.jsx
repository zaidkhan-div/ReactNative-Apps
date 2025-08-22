import { StyleSheet, Text, View, TouchableOpacity, Button, Alert, TextInput } from 'react-native'
import React, { useState } from 'react'
import { create } from "react-native-pixel-perfect"
import { SafeAreaView } from 'react-native-safe-area-context';


const Welcome = () => {
    const [inputVal, setInputVal] = useState("");
    console.log(inputVal);

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
                <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
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

const perfectSize = create({
    width: 375,
    height: 812,
})

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: perfectSize(20),
        display: "flex",
        flexDirection: "row",
        width: "100%"
    },
    inputWrapper: {
        flex: 1
    },
    input: {
        // backgroundColor: "#312651",
        color: "white",
        fontSize: perfectSize(16),
        flex: 1,
        borderWidth: 1,        // thickness of border
        borderColor: "black",    // color of border
        borderRadius: 20,
    },
    btnWrapper: {},
    btn: {
        backgroundColor: '#FF7754',
        fontSize: perfectSize(18),
        padding: perfectSize(10)
    }
})