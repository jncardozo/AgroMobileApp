import React from 'react'
import {
    TouchableHighlight,    
    View,
    Image,
    StyleSheet
} from 'react-native'

import imgVolumeH from '../../../assets/volume-high-48x48.png'
import imgVolumeL from '../../../assets/volume-low-48x48.png'
import imgMute from '../../../assets/mute-48x48.png'

const Volume = props => (
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
        <View>
            { props.muted ? (
                <Image style={ styles.icon } source = { imgMute }/>
            ) : (
                props.volume === .5 ? (
                    <Image style={ styles.icon } source = { imgVolumeL }/>
                ) : (
                    <Image style={ styles.icon } source = { imgVolumeH }/>
                )
            )}
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

export default Volume