import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Theme from '../utils/theme';

const Modal = () => {
    return (
        <>
            <View style={styles.iconWrapper}>
                <Icon name="plus" size={30} color="white" />
            </View>
        </>
    )
}
export default Modal;

const styles = StyleSheet.create({
    iconWrapper: {
        backgroundColor: Theme.colors.primary,
        width: 50,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100%",
        position: "absolute",
        bottom: 55,
        right: 20
    }
})