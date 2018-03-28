import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { FeedPage } from './FeedPage/FeedPage';
import { ProfilePage } from './ProfilePage/ProfilePage';

class Main extends Component {
    render() {
        return (
            <main className="container">
                <Route exact path="/" component={FeedPage} />
                <Route path="/people/:userId" component={ProfilePage} />
            </main>
        );
    }
}

export { Main };