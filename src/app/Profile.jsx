import React from 'react'

import { View, Text, Image, Button, StyleSheet, TouchableOpacity, Pressable } from 'react-native';

const Profile = () => {
    const handlePress = (obj) => {
        console.log(`Pressed ${obj}`)
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
                style={styles.image}
            />

            <View style={styles.textBox}>
                <Text style={styles.name}>Jane Smith</Text>
            </View>

            <Text style={styles.bio}>I love coding!</Text>

            <Button
                title="Button"
                color={"red"}
                onPress={() => handlePress('Button')} 
            />

            <Pressable style={styles.button} onPress={() => handlePress('Pressable')}>
                <Text style={styles.buttonText}>
                    Pressable
                </Text>
            </Pressable>

            


            <TouchableOpacity style={styles.button} onPress={() => handlePress('Touch')}>
                <Text style={styles.buttonText}>
                    TouchableOpacity
                </Text>
            </TouchableOpacity>

            <View style={styles.container} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",

        padding: 10,
        margin: 20,
        paddingTop: 50,
        paddingBottom: 40,
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 100,

        paddingTop: 20,
        paddingBottom: 20,
    },
    textBox: {
        padding: 10,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 5,

        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    bio: {

    },
    button: {
        padding: 10,
        borderRadius: 10, 
        backgroundColor: "black",
    },
    buttonText: {        
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    }
})

export default Profile