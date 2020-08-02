import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './Container/Container';

import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { LangContext } from './LangContext';

// TODO: Add {pl}
import en from './languages/en';
import uk from './languages/uk';
import ru from './languages/ru';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {/* TODO: Add {pl} */}
        <Route exact path="/" render={() => <LangContext.Provider value={uk}><Container /></LangContext.Provider>} />
        <Route exact path="/en" render={() => <LangContext.Provider value={en}><Container /></LangContext.Provider>} />
        <Route exact path="/uk" render={() => <LangContext.Provider value={uk}><Container /></LangContext.Provider>} />
        <Route exact path="/ru" render={() => <LangContext.Provider value={ru}><Container /></LangContext.Provider>} />
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
