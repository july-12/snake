import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import storeIndex from './reducers'

import Speed from './components/speed'
import Canvas from './components/canvas'
import Meat from './components/meat'
import Snake from './components/snake'

const store = createStore(storeIndex)
window.s = store

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="content">
          <div className="center">
            <Speed />
            <Canvas>
              <Snake />
              <Meat />
            </Canvas>
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
