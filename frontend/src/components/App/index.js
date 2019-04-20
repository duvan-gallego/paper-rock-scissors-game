import React from 'react';
import { Provider } from 'react-redux';
import ReduxStore  from './../../store';
import { Route, Switch } from 'react-router-dom';

// Import pages
import Home from '../Home';
import Playing from '../../containers/Playing';
import Statistics from '../Statistics';
import Error404 from '../Error404';

const ReduxStoreInstance = ReduxStore();

const App = () => (
  <Provider store={ReduxStoreInstance}>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/playing" component={Playing} />
        <Route exact path="/statistics" component={Statistics} />
        <Route exact path="/404" component={Error404} />
        <Route component={Error404} />
      </Switch>
    </div>
  </Provider>
);

export default App;