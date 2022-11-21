import React, { Component } from 'react'
import Navbar from './components/navbar'
import FetchNews from './components/fetchNews'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar title={"NewsDose"} mode={"light"}/>
        <FetchNews/>
      </div>
    )
  }
}
