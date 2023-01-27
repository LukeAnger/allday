import React from 'react'
import { Provider } from 'react-redux'
import store from './store.js'

import AllDay from './components/AllDay.jsx'

const App = () => {

  return (
    <Provider store={store}>
      <AllDay />
    </Provider>
  )
}

export default App