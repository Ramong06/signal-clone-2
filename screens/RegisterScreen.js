import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';
import { Button, Input, Text } from "react-native-elements";
import { auth } from "../firebase";


const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login",
        })
    }, [navigation])

    const register = () => {
        // This returns an athuenticated user and a promise (.then)
        auth.createUserWithEmailAndPassword(email, password)
            // Authenticated User Object returned from ^ auth.createUserWithEmailAndPassword(email, password)
            .then(authUser => {
                authUser.user.update({
                    displayName: name,
                    // URL on photoURL must be all caps for firebase
                    photoURL: imageUrl || "https://cdn.shopify.com/s/files/1/0030/4227/9494/products/mgs-solid-snake-tubbz-gs-04_800x.progressive.jpg?v=1611082441"
                })
            })
            // In case there is an error running auth.createUserWithEmailAndPassword this will return and error
            .catch((error) => alert(error.message));
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }}>
                Create An Account
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
            <Button
                containerStyle={styles.button}
                raised
                onPress={register}
                title="Register"
            />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    button: {
        width: 200,
        marginTop: 10,
    },
    inputContainer: {
        width: 300,
    }
});
