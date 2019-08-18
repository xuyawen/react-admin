import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Login from './pages/Login';
import Home from './pages/Home';
import Buttons from './pages/Ui/Buttons';
import Modals from './pages/Ui/Modals';
import NotMatch from './pages/NotMatch';
import FormLogin from './pages/Form/Login';
import Register from './pages/Form/Register';
import City from './pages/City';

export default class MyRouter extends React.Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route path="/login" component={ Login } replace></Route>
            <Route path="/admin" render={() =>  
              <Admin>
                <Switch>
                  <Route path="/admin/home" component={ Home } replace></Route>
                  <Route path="/admin/ui/buttons" component={ Buttons } replace></Route>
                  <Route path="/admin/ui/modals" component={ Modals } replace></Route>
                  <Route path="/admin/form/login" component={ FormLogin }></Route>
                  <Route path="/admin/form/reg" component={ Register }></Route>
                  <Route path="/admin/city" component={ City }></Route>
                  <Route component={ NotMatch } replace></Route>
                </Switch>
              </Admin>
            } replace></Route>
          </Switch>
        </App>
      </Router>
    )
  }
}