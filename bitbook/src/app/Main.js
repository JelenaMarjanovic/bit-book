import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { PostPageDetails } from './FeedPage/PostPageDetails/PostPageDetails';
import { FeedPage } from './FeedPage/FeedPage';
import { PeoplePage } from './PeoplePage/PeoplePage';
import { ProfilePage } from './ProfilePage/ProfilePage';

class Main extends Component {
    render() {
        return (
            <main className="container">
                <Route exact path="/" component={FeedPage} />
                <Route exact path="/people/" component={PeoplePage} />
                <Route exact path="/profile" component={ProfilePage} />
                <Route path="/people/:id" component={ProfilePage} />
                <Route exact path="/feeds/:id/:type" component={PostPageDetails} />
            </main>
        );
    }
}

export { Main };