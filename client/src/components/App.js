import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from 'material-ui/CssBaseline';
import { fetchUser } from '../actions';
import Header from './Header';

const Landing = () => <div>You have landed...</div>;
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
            <button
              onClick={() => {
                this.props.fetchUser();
              }}
            >
              CLICK
            </button>
            <Header />
            <h1>{JSON.stringify(this.props.auth)}</h1>
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
