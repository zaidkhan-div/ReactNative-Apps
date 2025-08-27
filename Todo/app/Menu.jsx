import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
import Theme from "../utils/theme"
import PerfectSize from "../utils/PerfectSize"
import Icon from "react-native-vector-icons/Feather"
import { Link } from 'expo-router'
import { useState } from 'react'


const Menu = () => {
    const [active, setAcitve] = useState("All Tasks");

    return (
        <>
            <View style={styles.iconContainer}>
                <Link href='/'><Icon name='arrow-left' size={25} color="white" /></Link>
                <Link href='/'><Text style={styles.iconText}>Back</Text></Link>
            </View>

            <ScrollView style={styles.navigationContainer}>
                <Text style={styles.navText}>navigation</Text>

                <View style={[
                    styles.listContainer,
                    active === "All Tasks" && { backgroundColor: Theme.colors.primary } // only applies if active = true
                ]} >
                    <View style={[{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }]}>
                        <View style={styles.listIcon}>
                            <Image style={[styles.listImg, { width: 30, height: 30 }]}
                                source={require("../assets/images/knowledge.png")} />
                        </View>
                        <Text style={styles.listText}>All Tasks</Text>
                    </View>
                    <Text style={styles.listNumber}>12</Text>
                </View>

                <View style={[
                    styles.listContainer,
                    active === "Important" && { backgroundColor: Theme.colors.primary } // only applies if active = true
                ]} >
                    <View style={[{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }]}>
                        <View style={styles.listIcon}>
                            <Image style={[styles.listImg, { width: 30, height: 30 }]}
                                source={require("../assets/images/roblox.png")} />
                        </View>
                        <Text style={styles.listText}>Important</Text>
                    </View>
                    <Text style={styles.listNumber}>8</Text>
                </View>

                <View style={styles.listContainer}>
                    <View style={[{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }]}>
                        <View style={styles.listIcon}>
                            <Image style={[styles.listImg, { width: 30, height: 30 }]}
                                source={require("../assets/images/calendar.png")} />
                        </View>
                        <Text style={styles.listText}>Today</Text>
                    </View>
                    <Text style={styles.listNumber}>4</Text>
                </View>

                <View style={styles.listContainer}>
                    <View style={[{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }]}>
                        <View style={styles.listIcon}>
                            <Image style={[styles.listImg, { width: 30, height: 30 }]}
                                source={require("../assets/images/analysis.png")} />
                        </View>
                        <Text style={styles.listText}>Analytics</Text>
                    </View>
                    <Text style={styles.listNumber}>12</Text>
                </View>

            </ScrollView >

        </>
    )
}
export default Menu;

const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor: Theme.colors.primary,
        height: PerfectSize(80),
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 15,
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
    },
    listIcon: {},
    // listImg: {
    //     width: "100%",
    //     height: "100%",
    // },
    listText: {
        fontSize: PerfectSize(20),
        fontWeight: "600",
        color: "black",

    },
    listNumber: {
        backgroundColor: "red",
        borderRadius: PerfectSize(100),
        paddingInline: 4,
        fontSize: PerfectSize(18),
        color: "white",
    }
})
