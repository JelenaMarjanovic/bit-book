import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { PostPageDetails } from './FeedPage/PostPageDetails/PostPageDetails';

import { FeedPage } from './FeedPage/FeedPage';
import { ProfilePage } from './ProfilePage/ProfilePage';

class Main extends Component {
    render() {
        return (
            <main className="container">
                <Route exact path="/" component={FeedPage} />
                <Route path="/people/:userId" component={ProfilePage} />
                <Route exact path="/feeds/:id/:type" component={PostPageDetails} />
            </main>
        );
    }
}

export { Main };