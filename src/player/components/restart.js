import React from 'react'
import {
    TouchableHighlight,
    Image,
    View,
    StyleSheet
} from 'react-native'
import imgRestart from '../../../assets/restart-48x48.png'

const Restart = props => (
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
            <Image style  = { styles.icon } source = { imgRestart } />
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

export default Restart