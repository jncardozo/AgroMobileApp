import React from 'react'

import {
    View,
    StyleSheet
} from 'react-native'

const ControlLayout = props => {
    return (
        <View style = { styles.container }>
            { props.children }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,.3)',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 48,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between'
    }
})

export default ControlLayout