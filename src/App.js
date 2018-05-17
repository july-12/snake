import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import storeIndex from './reducers'

import Snake from './components/snakes'

const store = createStore(storeIndex)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="content">
          <Snake />
        </div>
      </Provider>
    )
  }
}

export default App
