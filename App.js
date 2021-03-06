import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list'
import API from './utils/api'
import CategoryList from './src/videos/containers/category-list.js'
import Player from './src/player/containers/player'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from "./store"
import Loading from './src/sections/components/loading'
import AppLayout from './src/app'

type Props = {};
export default class App extends Component<Props> {
  state = {
  //   suggestionList: [],
  //   categoryList: [],
  }  
  render() {
    return (
      <Provider
        store = {store}
      >
        <PersistGate
          loading = {<Loading/>}
          persistor = {persistor}
        >
          <AppLayout/>          
        </PersistGate>
      </Provider>      
    );
  }
}


