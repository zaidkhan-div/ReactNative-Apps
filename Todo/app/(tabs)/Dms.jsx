import { Image } from 'expo-image';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ScrollView } from 'react-native'
import { TextInput } from 'react-native';
import SearchIcon from "react-native-vector-icons/EvilIcons"

const Dms = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.searchWrapper}>
                <TextInput style={styles.input} placeholder='Search..' />
                <SearchIcon style={styles.searchIcon} name='search' size={30} />
            </View>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.itemContainer}>
                    <View style={styles.imageWrapper}>
                        <Image style={styles.itemImage} source={require("../../assets/images/person.png")} />
                    </View>
                    <View style={styles.infoWrapper}>
                        <Text style={styles.userName}>Zaidkhan</Text>
                        <Text style={styles.lastMessage}>LastMessage</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Dms;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingHorizontal: 5
    },
    searchWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        paddingHorizontal: 8,
        gap: 5,
        borderWidth: 1,
        borderColor: "#00000070",
        borderRadius: 20,
    },
    input: {
        flex: 1,
        fontSize: 14,
        paddingHorizontal: 20
    },
    searchIcon: {
        width: 50
    },
    scrollContainer: {
        marginTop: 20,
        flex: 1
    },
    itemContainer: {
        height: 75,
        backgroundColor: "#00000050",
        borderBottomWidth: 1,
        borderBottomColor: "#00000090",
        justifyContent: "center",
        alignItems: "",
        paddingHorizontal: 10,
        flexDirection: "row",
        gap: 10
    },
    imageWrapper: {
        height: 50,
        width: 50
    },
    itemImage: {
        height: "100%",
        width: "100%"
    },
    infoWrapper: {},
    userName: {
        fontSize: 18,
        color: "black",
        fontWeight: "600"
    },
    lastMessage: {
        fontSize: 12,
        color: "#00000050",
        fontWeight: "400"
    }
})