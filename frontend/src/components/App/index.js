import React from 'react';
import { Provider } from 'react-redux';
import ReduxStore  from './../../store';
import { Route, Switch } from 'react-router-dom';

// Import NavBar
import Appnavbar from '../AppNavbar';

// Import pages
import Home from '../Home';
import Products from '../Products';
import Clients from '../Clients';
import Contact from '../Contact';
import Error404 from '../Error404';

const ReduxStoreInstance = ReduxStore();

const App = () => (
  <Provider store={ReduxStoreInstance}>
    <Appnavbar />
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:productCategory" component={Products} />
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/404" component={Error404} />
        <Route component={Error404} />
      </Switch>
    </div>
  </Provider>
);

export default App;