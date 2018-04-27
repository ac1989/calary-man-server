import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from 'material-ui/CssBaseline';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from '../styles/theme';
import Snackbar from 'material-ui/Snackbar';
import { fetchUser, killSnackbar } from '../actions';
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
                <Snackbar
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                  }}
                  open={this.props.snackbar.open}
                  autoHideDuration={6000}
                  onClose={this.props.killSnackbar}
                  SnackbarContentProps={{
                    'aria-describedby': 'message-id'
                  }}
                  message={<span>{this.props.snackbar.text}</span>}
                />
              </div>
            </div>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, form, snackbar }) => ({
  auth,
  form,
  snackbar
});

export default connect(mapStateToProps, { fetchUser, killSnackbar })(App);
