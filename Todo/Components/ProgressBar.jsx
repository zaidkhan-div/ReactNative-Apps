import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Theme from "../utils/theme";

const ProgressBar = ({ completionRate }) => {
    return (
        <View style={styles.container}>
            <AnimatedCircularProgress
                size={100}
                width={10}
                fill={completionRate}
                tintColor={Theme.colors.primary}
                backgroundColor="#e5e7eb"
            >
                {() => (
                    <Text style={styles.text}>{completionRate}%</Text>
                )}
            </AnimatedCircularProgress>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: Theme.colors.primary,
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default ProgressBar;
