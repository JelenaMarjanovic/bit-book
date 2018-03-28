import React, { Component } from 'react'
import { FeedPage } from './FeedPage/FeedPage';
import { Route } from 'react-router-dom'

class Main extends Component {
    render() {
        return (
            <main className="container">
                <Route path="/" component={FeedPage} />
            </main>
        );
    }
}

export { Main };