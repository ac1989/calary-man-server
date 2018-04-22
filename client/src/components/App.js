import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from 'material-ui/CssBaseline';
import { fetchUser } from '../actions';
import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <div>DASHBOARD</div>;
const MacroWizard = () => <div>Macro Wizard</div>;
const Intake = () => <div>Intake view...</div>;
const Exercise = () => <div>Exercise view...</div>;

class App extends Component {
  componentDidMount = () => {
    this.props.fetchUser();
  };

  render() {
    return (
      <div>
        <CssBaseline />
        <Router>
          <div>
            <Header />
            <pre>{JSON.stringify(this.props.auth, null, 2)}</pre>
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/calculator" component={MacroWizard} />
            <Route path="/intake" component={Intake} />
            <Route path="/exercise" component={Exercise} />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, { fetchUser })(App);
