import React from "react";
import { StyleSheet, Text, View, StatusBar} from "react-native";

export default function Loading(){
    return <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.text}>Getting the</Text>
        <Text style={styles.text}>Beautiful Weather</Text>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        padding: 150,
        backgroundColor: "#f6e58d",
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30,
        fontWeight: "600",
        textAlign: "right"
    }
});