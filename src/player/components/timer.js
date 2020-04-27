import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

const Timer = props => (
    <View
        style = { styles.container }
    >
        <Text style={ styles.timer }>
            { props.elapsed } / { props.duration }
        </Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        borderRadius: 20,
        overflow: 'hidden'
    },
    timer: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: 'white'
    }
})

export default Timer