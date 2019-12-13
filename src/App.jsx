import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from './routes'

import GlobalStyle from './styles/global'

import history from './services/history'
import Header from './components/Header'
import Footer from './components/Footer'

import store from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <HashRouter history={history}>
          <GlobalStyle />
          <Header />
          <Routes />
          <Footer />
        </HashRouter>
      </Provider>
    </>
  )
}
export default App
