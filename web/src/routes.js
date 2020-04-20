import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import About from './pages/About';
import Repos from './pages/Repos';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={About} />
                <Route path="/repos/:github_username" component={Repos} />
            </Switch>
        </BrowserRouter>
    );
};