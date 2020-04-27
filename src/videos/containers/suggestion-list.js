import React, {Component} from 'react';
import {
    FlatList,
    Text
} from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Movie from '../../screens/containers/movie'
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';
import { connect } from "react-redux"; //los containers pueden conectarse a redux

function mapStateToProps(state) {    
    console.log("console log Suggestion-list mapStatetoProps", state);  
    
    var suggestions=[];
    for (var i in state.suggestionList) {          
        for(var y in state.suggestionList[i].itemLocalidadMultiple) {
            //var dataa= state.suggestionList[i].itemLocalidadMultiple[y];
            var dataa0= {            
            "descripcionLoc" : state.suggestionList[i].descripcion, 
            "codPostal" : state.suggestionList[i].codPostal,
            "id" : state.suggestionList[i].itemLocalidadMultiple[y].id,
            "descripcion" : state.suggestionList[i].itemLocalidadMultiple[y].descripcion,
            "imagen" : state.suggestionList[i].itemLocalidadMultiple[y].imagen,
            "videoCod" : state.suggestionList[i].itemLocalidadMultiple[y].videoCod,
            "fechaAlta" : state.suggestionList[i].itemLocalidadMultiple[y].fechaAlta,
            "titulo" : state.suggestionList[i].itemLocalidadMultiple[y].titulo
            };           
            suggestions.push(dataa0);
        }
    }
    // console.log("cardatafetch suggestion list",suggestions);

    if (state.selectedMovie !== undefined || state.selectedMovie !== false)
    {
        var selections=[];
        // for (var i in state.selectedMovie) {          
        //     for(var y in state.selectedMovie[i].itemLocalidadMultiple) {
        //         //var dataa= state.suggestionList[i].itemLocalidadMultiple[y];
        //         var dataa1= {            
        //         "descripcionLoc" : state.selectedMovie[i].descripcion, 
        //         "codPostal" : state.selectedMovie[i].codPostal,
        //         "id" : state.selectedMovie[i].itemLocalidadMultiple[y].id,
        //         "descripcion" : state.selectedMovie[i].itemLocalidadMultiple[y].descripcion,
        //         "imagen" : state.selectedMovie[i].itemLocalidadMultiple[y].imagen,
        //         "videoCod" : state.selectedMovie[i].itemLocalidadMultiple[y].videoCod,
        //         "fechaAlta" : state.selectedMovie[i].itemLocalidadMultiple[y].fechaAlta,
        //         "titulo" : state.selectedMovie[i].itemLocalidadMultiple[y].titulo
        //         };           
        //         selections.push(dataa1);
        //     }
        // }
        
        for (var i in state.selectedMovie) {
            if(state.selectedMovie[i].itemLoc !== null)
            {                
                var dataa1= {            
                    "descripcionLoc" : state.selectedMovie[i].descripcion, 
                    "codPostal" : state.selectedMovie[i].codPostal,
                    "id" : state.selectedMovie[i].itemLoc.id,
                    "descripcion" : state.selectedMovie[i].itemLoc.descripcion,
                    "imagen" : state.selectedMovie[i].itemLoc.imagen,
                    "videoCod" : state.selectedMovie[i].itemLoc.videoCod,
                    "fechaAlta" : state.selectedMovie[i].itemLoc.fechaAlta,
                    "titulo" : state.selectedMovie[i].itemLoc.titulo
                };       
                selections.push(dataa1);         
            }                               
        }

        // console.log("cardatafetch selected movie",selections);
    }

    this.state = {
        suggestionList : [],
        categoryList: []
    }
    //debugger
    // console.log("console log Suggestion-list selectedMovie", state.selectedMovie);
    // console.log("console log Suggestion-list suggestionList", state.suggestionList);    
    return {
        //list: state.suggestionList
        list: state.selectedMovie === undefined || state.selectedMovie === false ? suggestions : selections
    }
}

class SuggestionList extends Component{
    keyExtractor = (item) => item.id.toString();
    renderEmpty = () => <Empty text = "No hay sugerencias" />
    // Si paso la propiedad color, se va a cambiar el color del separador sino queda el color por defecto
    // itemSeparator = () => <Separator color = "red"/>
    itemSeparator = () => <Separator />
    
    viewMoview = (item) => {
        //console.log("funcion viewmovie",item);
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: item
            }
        })        
    }
    
    renderItem = ({item}) => { 
        //console.log("funcion renderItem",item);      
        return (
            <Suggestion     
                {...item}
                onPress = {() => { this.viewMoview(item) }}    
            />
        )
    }
    // renderItem = ({item}) => { 
    //     console.log("funcion renderItem",item);       
    //     return (
    //         <Suggestion     
    //             {...item}
    //             onPress = {() => { this.viewMoview(item) }}    
    //         />
    //     )        
    // }
    render() { 
        //console.log("Suggestion-list props",this.props.list);
        // const list = [
        //     {
        //         title: 'Soja',
        //         key: '1'
        //     },
        //     {
        //         title: 'Pistacho',
        //         key: '2'
        //     }
        // ]                
        return (            
            <Layout
                title="Recomendaciones"
            >
                <FlatList 
                    keyExtractor = {this.keyExtractor}
                    // data = {list}
                     data = {this.props.list}
                    // La linea de codigo de abajo no es buena practica, lo correcto es usar alguna funcion para verificar vacios
                    // ListEmptyComponent = {()=><Text>No hay elementos en la lista</Text>} 
                    ListEmptyComponent = {this.renderEmpty}
                    ItemSeparatorComponent = {this.itemSeparator}
                    // renderItem = {({ item }) => <Text>{item.title}</Text>} luego se lo cambio por lo de abajo
                    renderItem = {this.renderItem}
                />
            </Layout>            
        )
    }
}

//mapStateToProps es un nombre que se puso por convencion pero puede ser cualquier nombre
export default connect(mapStateToProps)(SuggestionList);
// export default SuggestionList;