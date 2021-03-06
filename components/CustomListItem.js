import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from "react-native-elements";

const CustomListItem = ({ id, chatName, enterChat }) => {
    return (
        <ListItem>
            <Avatar
                rounded
                source={{
                    uri:
                        "https://cdn.shopify.com/s/files/1/0030/4227/9494/products/mgs-solid-snake-tubbz-gs-04_800x.progressive.jpg?v=1611082441"
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                    THE CHAT WILL GO HERE!
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    This is a test
                    This is a test
                    This is a test
                    This is a test
                    This is a test
                    This is a test
                    This is a test
                    This is a test
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem;

const styles = StyleSheet.create({});
