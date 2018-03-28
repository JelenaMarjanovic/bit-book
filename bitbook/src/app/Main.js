import React, { Component } from 'react'
import { FeedPage } from './FeedPage/FeedPage';
import { Route } from 'react-router-dom'
import { PostPageDetails } from './FeedPage/PostPageDetails/PostPageDetails';

class Main extends Component {
    render() {
        return (
            <main className="container">
                <Route exact path="/" component={FeedPage} />
                <Route exact path="/feeds/:id/:type" component={PostPageDetails} />
            </main>
        );
    }
}

export { Main };