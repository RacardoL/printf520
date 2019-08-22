import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Title from './views/components/Title'
import Foot from './views/components/Foot'
import './style/app.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Provider store={store}>
        <div className="layout-root">
          <Title />
          <Foot />
        </div>
      </Provider>
    )
  }
}

export default App
