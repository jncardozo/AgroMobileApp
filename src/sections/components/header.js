import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView // Este componente permite corregir un problema de renderizado propio de IOS
} from 'react-native';

//DOM component, componente funcional
function Header(props){
    return (
        <View>
            <SafeAreaView>
                <View style = {styles.container}>
                    {/* <Image
                        source = {require ('../../../assets/SePLiRe.png')}
                        style = {styles.logo}
                    /> */}
                    <Text style = {styles.title}> {props.title} </Text>
                    <View style = {styles.right}>                        
                        {props.children}
                    </View>                
                </View>                
            </SafeAreaView>            
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 50,
        height: 30,
        resizeMode: 'contain', 
    },
    container: {        
        paddingVertical: 12,
        paddingHorizontal: 10,        
        flexDirection: 'row',
    },
    right: {          
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    title: {        
        color:'#4c4c4c',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',  
        marginLeft: 45,
    }
})

export default Header;