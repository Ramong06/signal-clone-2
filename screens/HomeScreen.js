import React, { useLayoutEffect } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import CustomListItem from '../components/CustomListItem';

const HomeScreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: "black" },
        });
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({});
