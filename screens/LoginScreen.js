import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
    return (
        <View>
            <StatusBar style="light" />
            <Image source={require("../assets/signal-logo.png")} style={{ width: 100, height: 100 }} />
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({})
