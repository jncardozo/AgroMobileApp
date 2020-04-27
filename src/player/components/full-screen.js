import React from 'react'
import {
    TouchableHighlight,
    Image,
    View,
    StyleSheet
} from 'react-native'
import imgFullscreenMax from '../../../assets/fullscreen-max-48x48.png'
import imgFullscreenMin from '../../../assets/fullscreen-min-48x48.png'

const FullScreen = props => (
    <TouchableHighlight
        onPress = { props.onPress }
        style = { styles.container }
        underlayColor = 'red'
        hitSlop = {{
            left: 5,
            top: 5,
            bottom: 5,
            right: 5 
        }}
    >
        <View style={ styles.button }>
            <Image
                style  = { styles.icon }
                source = { props.fullscreen ? imgFullscreenMin : imgFullscreenMax }
            />
        </View>
    </TouchableHighlight>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        borderRadius: 20,
        overflow: 'hidden'
    },
    button: {
    },
    icon: {
        height: 30,
        width: 30
    }
})

export default FullScreen