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

            <View style={styles.textContainer}>            
                <Text style={styles.bio}>
                    I love coding!
                </Text>
            </View>

            <Pressable style={( {pressed} ) => [
                styles.button,
                pressed && styles.pressedButton
            ]} 
                onPress={() => handlePress('Pressable')}>
                <Text style={styles.buttonText}>
                    Connect!
                </Text>
            </Pressable>
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

        // borderWidth: 1, 
        // borderColor: "black",
        borderRadius: 15,

        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 100,

        paddingTop: 20,
        paddingBottom: 20,
    },
    textContainer: {
        padding: 10,
        margin: 10,
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
        fontSize: 16,
    },
    button: {
        padding: 10,
        borderRadius: 10, 
        backgroundColor: "black",
    },
    pressedButton: {
        opacity: 0.5
    },
    buttonText: {        
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    }
})

export default Profile