import React from 'react'
import { 
    View, 
    StyleSheet, 
    Image, 
    ActivityIndicator} // este ultimo sirve para mostrar la ruedita de cargando 
from 'react-native';


function Loading(props){
    return (
        <View style= {styles.container}>
            <Image 
                source = {require('../../../assets/SePLiRe.png')}
                style = {styles.logo}
            />
            <ActivityIndicator /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logl : {
        width: 200,
        height: 80,
        resizeMode: 'contain',
        marginBottom: 10,
    }
})

export default Loading;