import React, { Component } from 'react'
//b987869345984dbfaea0c0e06289708e
import Navbar from './components/navbar'
import News from './components/news'

export default class App extends Component {
   render() {
    return (
      <div>
        <Navbar/>
        <News pagesize={5}/>
      </div>
    )
  }
}
