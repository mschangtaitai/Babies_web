import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '../../store';
import AddBaby from '../AddBaby';
import Dashboard from '../Dashboard';
import Event from '../Event';
import { createBrowserHistory } from 'history'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

export const history = createBrowserHistory()
const store = configureStore();

const Home = () => <h1>home</h1>;
const baby = () => <h1>baby</h1>;


const App = () => (
    <Router history={history}>
    <Provider store={store}>
      <Link to="/">createBaby</Link>{' '}
      <Link to={{pathname: '/baby'}}>Create event</Link>{' '}
      
      <Switch>
        <Route exact path="/" component={AddBaby} />
        <Route path="/baby" component={Dashboard}>
          <Dashboard></Dashboard>
        </Route>
      </Switch>
    </Provider>

  </Router>
);

export default App;