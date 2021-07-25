import React from "react";
import { StyleSheet, View, Text, StatusBar}from "react-native";
import propTypes from "prop-types";
import {LinearGradient} from "expo-linear-gradient";
import {Feather} from "@expo/vector-icons";

const weatherOptions = {
    Haze: {
      iconName: "align-center",
      gradient: ["#283048", "#859398"],
      title: "Haze",
      subtitle: "Can't see anything"
    },
    Thunderstorm: {
      iconName: "cloud-lightning",
      gradient: ["#FFE47A","#3D7EAA"],
      title: "ThunderStorm",
      subtitle: "It's THUNDER!"
    },
    Drizzle: {
      iconName: "cloud-drizzle",
      gradient: ["#1CD8D2","#93EDC7"],
      title: "Drizzle",
      subtitle: "Drip-Drop"
    },
    Rain: {
      iconName: "cloud-rain",
      gradient: ["#536976","#BBD2C5"],
      title: "Rain",
      subtitle: "Just don't go outside."
    },
    Snow: {
      iconName: "cloud-snow",
      gradient: ["#E4E5E6","#00416A"],
      title: "Snow",
      subtitle: "Do you wanna build a snowman?"
    },
    Clear: {
      iconName: "sun",
      gradient: ["#FF8008","#FFC837"],
      title: "Sunny",
      subtitle: "Let's go outside"
    },
    Clouds: {
      iconName: "cloud",
      gradient: ["#232526","#414345"],
      title: "Cloud",
      subtitle: "cloud everywhere"
    },
};

export default function Weather({temp, condition}){
    return (
        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
            <Feather
                size={96}
                name={weatherOptions[condition].iconName}
                color="white"
            />
            <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer} />
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>
                    {weatherOptions[condition].subtitle}
                </Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp:propTypes.number.isRequired,
    condition: propTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Clear",
        "Clouds",
        "Haze",
      ]).isRequired
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 64,
        fontWeight: "300",
        marginBottom: 10,
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 40,
        alignItems: "flex-start"
    }
})