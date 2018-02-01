import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers } from 'redux'
import Provider from 'react-redux/es/components/Provider'
import HashRouter from 'react-router-dom/HashRouter'
import { routerReducer } from 'react-router-redux/lib/reducer'
import AppContainer from 'react-hot-loader/lib/AppContainer'
import App from './App'
import rootReducer from './reducers/index'
import configStore from './store'

const FastClick = require('fastclick')

//解决移动端300毫秒延迟
FastClick.attach(document.body)

const store = configStore(
    combineReducers({routing: routerReducer, ...rootReducer})
)

const render = Component =>
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <HashRouter>
                    <Component />
                </HashRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )

render(App)

if(module.hot) {
    module.hot.accept('./App', () => {
        const NextRootContainer = require('./App').default
        render(NextRootContainer)
    })
}