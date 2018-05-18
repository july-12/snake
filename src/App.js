import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import storeIndex from './reducers'
import { startMoving } from './actions/snakes.js'

import Canvas from './components/canvas'
import Meat from './components/meat'
import Snake from './components/snakes'

const store = createStore(storeIndex)
window.s = store

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="content">
          <Canvas>
            <Snake />
            <Meat />
          </Canvas>
        </div>
      </Provider>
    )
  }
}

export default App
