import React, { Component } from 'react'
import { FeedPage } from './FeedPage/FeedPage';

class Main extends Component {
    render() {
        return (
            <main className="container">
                <FeedPage />
            </main>
        );
    }
}

export { Main };