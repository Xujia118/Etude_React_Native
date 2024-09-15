import React, { useState } from 'react'

import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'

const weatherData = {
    "San Jose": "20°C, Sunny",
    "New York": "18°C, Cloudy",
    "Paris": "22°C, Rainy",
}

const EtudeState = () => {
    const [isOn, setIsOn] = useState(false);
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState('');

    function handleToggle() {
        setIsOn(!isOn);
    }

    function getCity(text) {
        console.log(text)
        setCity(text);
    }

    function getWeather() {
        setWeather(weatherData[city] || 'No data available');
        setCity("");
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>{isOn ? "On" : "Off"}</Text>
                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        pressed && styles.buttonPressed
                    ]
                    }
                    onPress={handleToggle}>
                    <Text style={styles.buttonText}>
                        TOGGLE
                    </Text>
                </Pressable>

                <Text style={styles.text}>Weather App</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder='Enter a city...'
                    value={city}
                    onChangeText={getCity}
                />
                <Text style={styles.weatherText}>
                    {weather}
                </Text>
                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        pressed && styles.buttonPressed
                    ]}
                    onPress={getWeather}
                >
                    <Text style={styles.buttonText}>
                        CHECK
                    </Text>
                </Pressable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",

        margin: 50,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    inputField: {
        margin: 20,
        padding: 10,

        width: '100%',
        height: 60,

        fontSize: 20,

        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        opacity: 0.3,
    },
    button: {
        margin: 50,
        padding: 20,
        paddingLeft: 50,
        paddingRight: 50,
        width: '100%',

        backgroundColor: 'blue',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonPressed: {
        opacity: 0.3
    },
    weatherText: {
        fontSize: 18,
        marginVertical: 10,
        fontWeight: 'bold',
    },
})

export default EtudeState