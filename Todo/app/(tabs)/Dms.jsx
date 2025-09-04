import { Image } from 'expo-image';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native';
import SearchIcon from "react-native-vector-icons/EvilIcons"
import Theme from "../../utils/theme"
import { Link, useRouter } from 'expo-router';

const Dms = () => {
    const router = useRouter();

    const usersData = [
        {
            name: "Zaidkhan",
            lastMsg: "Last Message"
        },
        {
            name: "MusabKhan",
            lastMsg: "Last Message"
        },
        {
            name: "Touseef",
            lastMsg: "Last Message"
        }
    ]

    const openChat = (name) => {
        router.push({
            pathname: "/ChatScreen",
            params: { userId: '123', name: name },
        })
    }

    return (
        <View style={styles.safeArea}>
            <View style={styles.topBar}>
                <Link href="/ChatScreen"><Text style={styles.topTitle}>Find People</Text></Link>
            </View>
            <View style={styles.searchWrapper}>
                <TextInput style={styles.input} placeholder='Search..' />
                <SearchIcon style={styles.searchIcon} name='search' size={30} />
            </View>
            <ScrollView style={styles.scrollContainer}>

                {
                    usersData.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.itemContainer} onPress={() => openChat(item.name)}>
                            <View style={styles.imageWrapper}>
                                <Image style={styles.itemImage} source={require("../../assets/images/testimonial3.jpg")} />
                            </View>
                            <View style={styles.infoWrapper}>
                                <Text style={styles.userName}>{item?.name}</Text>
                                <Text style={styles.lastMessage}>{item?.lastMsg}</Text>
                            </View>
                        </TouchableOpacity>
                    ))

                }


            </ScrollView>
        </View >
    )
}
export default Dms;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingHorizontal: 5
    },
    topBar: {
        marginTop: 10,
    },
    topTitle: {
        fontSize: 24,
        fontWeight: "600",
        color: "black"
    },
    searchWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 8,
        gap: 5,
        borderWidth: 1,
        borderColor: "#00000070",
        borderRadius: 20,
        marginTop: 10
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
        flex: 1,
    },
    itemContainer: {
        height: 70,
        backgroundColor: "#d1c4c412",
        borderBottomWidth: 1,
        borderBottomColor: "#00000070",
        justifyContent: "start",
        alignItems: "center",
        paddingHorizontal: 10,
        flexDirection: "row",
        gap: 10,
    },
    imageWrapper: {
        height: 50,
        width: 50
    },
    itemImage: {
        height: "100%",
        width: "100%",
        borderRadius: 100
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