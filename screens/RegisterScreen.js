import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Button, Input } from "react-native-elements";


const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const register = () => {

    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }}>
                Create A Signal Account
            </Text>

            <View style={styles.inputContainer}>
                <Input
                    placeholder="Full Name"
                    autofocus
                    type="text"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder="Email"
                    type="text"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Input
                    placeholder="Password"
                    secureTextEntry
                    type="text"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Input
                    placeholder="Profile Picture URL (optional)"
                    type="text"
                    value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                    onSubmitEditing={register}
                />
            </View>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({});
