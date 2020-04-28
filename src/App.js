import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
import Counters from './components/Counters'

export class App extends Component {
  state={
    counters:[
      {id:1,value:0},
      {id:2,value:0},
      {id:3,value:0},
      {id:4,value:0},
      {id:5,value:0},
      {id:6,value:0}
    ]
  }
  render() {
    return (
      <div>
      <Navbar totalCounter={this.state.counters.filter(counter=> counter.value>0).length}/>
      <Counters counters={this.state.counters}/>
        app
      </div>
    )
  }
}

export default App
