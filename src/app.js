import React, { Component } from 'react'
import {
    Text,
    ScrollView,
} from 'react-native'

import {connect} from 'react-redux'
import API from '../utils/api'
import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestion-list'
import CategoryList from './videos/containers/category-list.js'
import Movie from './screens/containers/movie'
import Search from './sections/containers/search'
import SearchByLocation from './sections/containers/searchByLocations'
import Player from './player/containers/player'

class AppLayout extends Component {
    async componentDidMount() {
        const suggestionList = await API.getSuggestion(/*10*/);    
        this.props.dispatch({
          type: 'SET_SEGGESTION_LIST',
          payload: {
            suggestionList
          }
        })
    
        const categoryList = await API.getMovies();    
        this.props.dispatch({
          type: 'SET_CATEGORY_LIST',
          payload: {
            categoryList
          }
        })
        // console.log(movies);
        // console.log(categories);
        // this.setState({          
        //   suggestionList: movies,      
        //   categoryList: categories, 
        // })        
    }
    async componentDidUpdate(){
      // console.log("console de componentDidUpdate con las props", this.props);
    }
    render() {                    
        // console.log("app RENDER lenght",count);   
        // if (this.props.selectedMovie){
        //   return <Movie />
        // }
        // console.log("app render",this.props);
        if (/*this.props.selectedMovie == undefined || */this.props.selectedMovie != null && Object.keys(this.props.selectedMovie).length < 6)
        {
          // console.log("entra en el primer if");
          return(
            <Home>
                <Header 
                  title = "Módulo de Consumidores"
                />                
                <Search           />
                <SearchByLocation />
                <ScrollView>                  
                  <Player         />                  
                  <CategoryList   />
                  <SuggestionList />
                </ScrollView>
            </Home>
          )
        }
        
        //la condicion length >= 6 la agregue porque tengo problemas con Object.keys(this.props.selectedMovie).length
        if (this.props.selectedMovie != null && Object.keys(this.props.selectedMovie).length >= 6)
        {                    
          // console.log("entra en el segundo if");
          return <Movie />
        }
        return(
            <Home>
                {/* <Header>
                  <Text>Hola Neri</Text>
                  <View 
                      style={{
                      flex: 1,
                      height: 100,
                      }}
                  >            
                  </View>
                </Header> */}
                <Header 
                  title = "Módulo de Consumidores"
                />
                {/* <Movie  /> */}
                <Search />
                <SearchByLocation />
                <ScrollView>                  
                  <Player  />
                  {/* <Text>categorias</Text> */}
                  <CategoryList
                  //list={this.state.categoryList}
                  />                  
                  <SuggestionList
                  //list={this.state.suggestionList} 
                  />
                </ScrollView>
            </Home>
        )
    }
}

function mapStateToProps (state) {
    //console.log("app STATE",state);
    return {
      selectedMovie: state.selectedMovie,
    }
}

export default connect(mapStateToProps)(AppLayout);
