import React from 'react'
import {
    TouchableHighlight,
    Image,
    View,
    StyleSheet
} from 'react-native'
import imgRepeat from '../../../assets/repeat-48x48.png'

const Repeat = props => (
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
        <View style={[ styles.button,
            {
                opacity: props.repeat ? 1 : 0.25
            }
        ]}>
            <Image style  = { styles.icon } source = { imgRepeat } />
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
        height: 36,
        width: 36
    }
})

export default Repeat