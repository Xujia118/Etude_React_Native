import React from 'react'

import { View, Text, FlatList } from 'react-native'

const fruits = ['apple', 'banana', 'cantaloup', 'dragonfruit']

const LearnList = () => {
    return (
        <View>
            {/* {fruits.map((fruit, index) => (
                <Text key={(fruit + index).toString()}>{fruit}</Text>
            ))
            } */}

            <FlatList 
                data={fruits} 
                keyExtractor={item => item} 
                renderItem={( {item} ) => (
                    <Text>{item}</Text>
                )}
            />
        </View>
    )
}

export default LearnList