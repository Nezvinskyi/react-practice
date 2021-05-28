import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import TodosView from './views/TodosView';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';

class App extends Component {
  state = {};
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <Container>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/todos" component={TodosView} />
        </Switch>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
