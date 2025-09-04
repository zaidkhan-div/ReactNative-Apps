// import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
// import Theme from "../utils/theme"
// import PerfectSize from "../utils/PerfectSize"
// import Icon from "react-native-vector-icons/Feather"
// import { Link } from 'expo-router'


// const Analytics = () => {
//     return (
//         <>
//             <View style={styles.iconContainer}>
//                 <Link href='/'>
//                     <Icon name='arrow-left' size={25} color="white" />
//                 </Link>
//                 <Link href='/'><Text style={styles.iconText}>Back</Text></Link>
//             </View>

//             <View>

//             </View>
//         </>
//     )
// }
// export default Analytics
// const styles = StyleSheet.create({
//     iconContainer: {
//         backgroundColor: Theme.colors.primary,
//         height: PerfectSize(80),
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "flex-start",
//         paddingTop: 15,
//         paddingLeft: 10,
//         gap: 5
//     },
//     iconText: {
//         fontSize: PerfectSize(20),
//         fontWeight: "700",
//         color: "white",
//         cursor: "pointer"
//     },
// })

import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import Theme from "../../utils/theme"
import PerfectSize from "../../utils/PerfectSize"
import Icon from "react-native-vector-icons/Feather"
import { Link } from 'expo-router'
import ProgressBar from '../../Components/ProgressBar'
import { useSelector } from 'react-redux'

const Analytics = () => {
    let { todos } = useSelector((state) => state.todoSlice);
    console.log(todos, "todos");

    return (
        <>
            {/* Header */}
            <SafeAreaView style={styles.iconContainer}>
                <Link href='/' asChild>
                    <TouchableOpacity>
                        <Icon name='arrow-left' size={25} color="white" />
                    </TouchableOpacity>
                </Link>
                <Link href='/' asChild>
                    <TouchableOpacity>
                        <Text style={styles.iconText}>Back</Text>
                    </TouchableOpacity>
                </Link>
            </SafeAreaView>

            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.card}>
                        <Text style={styles.cardNumber}>{todos.length}</Text>
                        <Text style={styles.cardLabel}>Total Tasks</Text>
                        <View style={styles.cardInnerBox}>
                            <Text style={styles.cardInnerText}>Weekly Progress</Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.cardInner}>
                            <ProgressBar completionRate={50} />
                            <Text style={styles.smallText}>Completion Rate</Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.cardNumber}>85</Text>
                        <Text style={styles.cardLabel}>Productivity Score</Text>
                        <View style={styles.cardInnerBoxBig}>
                            <Text style={styles.cardInnerText}>Daily Activity Heatmap</Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.cardNumber}>7</Text>
                        <Text style={styles.cardLabel}>Day Streak</Text>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default Analytics

const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor: Theme.colors.primary,
        height: 55,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        gap: 5
    },
    iconText: {
        fontSize: PerfectSize(20),
        fontWeight: "700",
        color: "white"
    },
    container: {
        padding: 15,
        gap: 20
    },
    card: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 4,
        gap: 10
    },
    cardNumber: {
        fontSize: PerfectSize(28),
        fontWeight: "bold",
        color: Theme.colors.primary
    },
    cardLabel: {
        fontSize: PerfectSize(14),
        textTransform: "uppercase",
        color: "gray"
    },
    cardInnerBox: {
        backgroundColor: "#f0eef9",
        borderRadius: 10,
        paddingVertical: PerfectSize(50),
        alignItems: "center",
        justifyContent: "center"
    },
    cardInnerBoxBig: {
        backgroundColor: "#f0eef9",
        borderRadius: 10,
        paddingVertical: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    cardInner: {
        alignItems: "center",
        justifyContent: "center",
        gap: 5
    },
    cardInnerText: {
        fontSize: 12
    },
    smallText: {
        fontSize: 12,
        textTransform: "uppercase",
        color: "gray"
    }
})
