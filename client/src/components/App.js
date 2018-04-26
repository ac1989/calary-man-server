import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from 'material-ui/CssBaseline';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from '../styles/theme';
import { fetchUser } from '../actions';
import Header from './Header';
import Landing from './Landing';
import Calculator from './Calculator';
import Intake from './Intake';
import Exercise from './Exercise';

const Dashboard = () => <div>DASHBOARD</div>;

class App extends Component {
  componentDidMount = () => {
    this.props.fetchUser();
  };

  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <div>
              <Header />
              <div style={{ width: '90%', maxWidth: '1200px', margin: 'auto' }}>
                <Route exact path="/" component={Landing} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/calculator" component={Calculator} />
                <Route path="/intake" component={Intake} />
                <Route path="/exercise" component={Exercise} />
                {/* TODO: remove all these dev  */}
                <pre style={{ background: '#f2f2f2' }}>
                  {JSON.stringify(this.props.auth, null, 2)}
                </pre>
              </div>
            </div>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, form }) => ({ auth, form });

export default connect(mapStateToProps, { fetchUser })(App);
