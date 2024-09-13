import React, { useState } from 'react'

import { View, Text, Pressable, StyleSheet } from 'react-native'

const Inventory = () => {
    const [count, setCount] = useState(0);

    function decrease() {
        setCount(prev => prev - 1);
    }

    function increase() {
        setCount(prev => prev + 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.digit}>{count}</Text>
            <View style={styles.buttonContainer}>
                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        styles.adjustButton, count == 0 && styles.disabledButton,
                        pressed && styles.pressedButton
                    ]}
                    onPress={decrease}
                    disabled={count == 0} >
                    <Text style={[styles.buttonText, styles.adjustButtonText, count == 0 && styles.disabledButtonText]}>
                        -
                    </Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        styles.resetButton,
                        pressed && styles.pressedButton
                    ]}
                    onPress={reset} >
                    <Text style={[styles.buttonText, styles.resetButtonText]}>
                        Reset
                    </Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        styles.adjustButton,
                        pressed && styles.pressedButton
                    ]}
                    onPress={increase} >
                    <Text style={[styles.buttonText, styles.adjustButtonText]}>
                        +
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        margin: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
        padding: 10,
    },
    digit: {
        fontSize: 30,
    },
    button: {
        borderRadius: 5,

        justifyContent: 'center',
        alignItems: 'center',

        width: 60,
        height: 60,
    },
    adjustButton: {
        backgroundColor: 'black',
    },
    resetButton: {
        backgroundColor: 'coral',
    },
    pressedButton: {
        opacity: 0.5,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    adjustButtonText: {
        color: 'white'
    },
    resetButtonText: {
        color: 'black',
        fontSize: 16,
    },
    disabledButton: {
        backgroundColor: 'gray'
    },
    disabledButtonText: {
        color: "black",
    },
})

export default Inventory