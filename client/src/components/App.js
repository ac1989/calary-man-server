import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from 'material-ui/CssBaseline';
import Header from './Header';

const Landing = () => <div>You have landed...</div>;
const Dashboard = () => <div>DASHBOARD</div>;
const MacroWizard = () => <div>Macro Wizard</div>;
const Intake = () => <div>Intake view...</div>;
const Exercise = () => <div>Exercise view...</div>;

const App = () => (
  <div>
    <CssBaseline />
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/calculator" component={MacroWizard} />
        <Route path="/intake" component={Intake} />
        <Route path="/exercise" component={Exercise} />
      </div>
    </Router>
  </div>
);

export default App;
