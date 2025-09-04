import { Link } from 'expo-router'
import { useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/Feather"
import PerfectSize from "../../utils/PerfectSize"
import Theme from "../../utils/theme"
import { useSelector } from 'react-redux'

const Menu = () => {
    const [active, setActive] = useState("All Tasks");
    let todos = useSelector((state) => state.todoSlice.todos);
    const importTodos = todos.filter((item) => item?.priority === "high");


    return (
        <>
            <SafeAreaView style={styles.iconContainer}>
                <Link href='/'><Icon name='arrow-left' size={25} color="white" /></Link>
                <Link href='/'><Text style={styles.iconText}>Back</Text></Link>
            </SafeAreaView>

            <ScrollView style={styles.navigationContainer}>
                <Text style={styles.navText}>navigation</Text>

                <TouchableOpacity
                    onPress={() => setActive("All Tasks")}
                    style={[
                        styles.listContainer,
                        active === "All Tasks" && { backgroundColor: Theme.colors.primary, color: "white" }
                    ]} >
                    <View style={[{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, }]}>
                        <View style={styles.listIcon}>
                            <Image style={[styles.listImg, { width: 30, height: 30 }]}
                                source={require("../../assets/images/knowledge.png")} />
                        </View>
                        <Text style={active === "All Tasks" && { color: "white" }}>All Tasks</Text>
                    </View>
                    <Text style={styles.listNumber}>{todos.length}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setActive("Important")}
                    style={[
                        styles.listContainer,
                        active === "Important" && { backgroundColor: Theme.colors.primary, color: "white" }
                    ]} >
                    <View style={[{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }]}>
                        <View style={styles.listIcon}>
                            <Image style={[styles.listImg, { width: 30, height: 30 }]}
                                source={require("../../assets/images/roblox.png")} />
                        </View>
                        <Text style={active === "Important" && { color: "white" }}>Important</Text>
                    </View>
                    <Text style={styles.listNumber}>{importTodos.length}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setActive("Today")}
                    style={[
                        styles.listContainer,
                        active === "Today" && { backgroundColor: Theme.colors.primary }
                    ]}>
                    <View style={[{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, }]}>
                        <View style={styles.listIcon}>
                            <Image style={[styles.listImg, { width: 30, height: 30 }]}
                                source={require("../../assets/images/calendar.png")} />
                        </View>
                        <Text style={active === "Today" && { color: "white" }}>Today</Text>
                    </View>
                    <Text style={styles.listNumber}>4</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setActive("Analytics")}
                    style={[
                        styles.listContainer,
                        active === "Analytics" && { backgroundColor: Theme.colors.primary }
                    ]}>
                    <View style={[{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }]}>
                        <View style={styles.listIcon}>
                            <Image style={[styles.listImg, { width: 30, height: 30 }]}
                                source={require("../../assets/images/analysis.png")} />
                        </View>
                        <Text style={active === "Analytics" && { color: "white" }}>Analytics</Text>
                    </View>
                    {/* <Text style={styles.listNumber}>12</Text> */}
                </TouchableOpacity>

            </ScrollView >

        </>
    )
}
export default Menu;

const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor: Theme.colors.primary,
        height: 55,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: 10,
        gap: 5
    },
    iconText: {
        fontSize: PerfectSize(20),
        fontWeight: "700",
        color: "white",
        cursor: "pointer"
    },
    navigationContainer: {
        marginTop: 15,
        marginHorizontal: 5,
        margin: "auto",
    },
    navText: {
        textTransform: "uppercase",
        fontSize: PerfectSize(16)
    },
    listContainer: {
        borderWidth: 1,
        borderWidth: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: PerfectSize(15),
        justifyContent: "space-between",
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 5,
        backgroundColor: "white",
        shadowColor: "#00000",
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
        paddingHorizontal: 14
    },
    listIcon: {},
    // listImg: {
    //     width: "100%",
    //     height: "100%",
    // },
    listText: {
        fontSize: PerfectSize(20),
        fontWeight: "600",
    },
    listNumber: {
        backgroundColor: "red",
        borderRadius: PerfectSize(100),
        paddingInline: 4,
        fontSize: PerfectSize(18),
        color: "white",
    }
});