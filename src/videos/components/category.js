import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

function Category(props) {   
    // console.log("categoria", props);         
    return (
        <ImageBackground
            style = {styles.wrapper}
            // source = {{
            //     uri: props.background_image
            // }}
            source={require('../../../assets/agroBackground.jpg')}
        >
            <Text style={styles.genre}>{props.categoria.descripcion}</Text>
            {/* <Text style={styles.genre}>{props.categoria.descripcion}</Text> */}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: 190,
        height: 80,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    genre: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0,0,0, .75)',
        textShadowOffset: {
            width: 2,
            height: 2,
        }, 
        textShadowRadius: 0,
    }
})

export default Category;