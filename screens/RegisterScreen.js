import React from 'react'
import { StatusBar } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

const RegisterScreen = ({ navigation }) => {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text>I Am THE REGISTER SCREEN!</Text>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({});
