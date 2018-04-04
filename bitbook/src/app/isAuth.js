import React, { Component } from 'react'

import { utils } from '../shared/utils'
import { App } from './App'
import { LoginPage } from './LoginPage/LoginPage'

const isAuth = () => {
    return class authenticate extends Component {

        toShow = () => {
            const isAuthenticated = false //utils.checkIfAuth()
            return isAuthenticated ? <App /> : <LoginPage />
        }

        render() {
            return this.toShow()
        }
    }
}

export { isAuth }