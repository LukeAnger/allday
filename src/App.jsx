import React from 'react'
import { Provider } from 'redux'
import store from './store'

import AllDay from './components/AllDay.jsx'

const App = () => {

  return (
    <Provider store={store}>
      <AllDay />
    </Provider>
  )
}

export default App