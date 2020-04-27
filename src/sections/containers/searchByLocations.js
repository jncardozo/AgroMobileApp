import React, {Component} from 'react'

import {
    TextInput,
    StyleSheet
} from 'react-native'

import API from '../../../utils/api'
import {connect} from 'react-redux'

class SearchByLocation extends Component {
    state = {
        text: ''
    }
    handleSubmit = async () => {        
        const movies = await API.searchLocation(this.state.text)        
        console.log("Console component Search props",movies);
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                // movie: movies[0]
                movie: movies
            }
        })        
    }
    handleChangeText = (text) => {
        this.setState({
            text
        })
    }
    render() {        
        return(
            <TextInput
                placeholder = "Buscar Productos / Servicios por Localidad"
                autoCorrect = {false}
                autoCapitalize = "none"
                underlineColorAndroid = "transparent"
                onSubmitEditing = {this.handleSubmit} //handleSubmit funciones con nombres inventados
                onChangeText = {this.handleChangeText}  //handleChangeText funciones con nombres inventados
                style = {styles.input}
            />
        )
    }
}

const styles = StyleSheet.create({
    input: {
      padding: 12,
      fontSize: 17,
      borderWidth: 1,
      borderColor: '#eaeaea'
    }
})

export default connect() (SearchByLocation);