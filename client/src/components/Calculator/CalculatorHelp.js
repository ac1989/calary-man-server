import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    padding: `0 ${theme.spacing.unit * 6}px`,
    maxWidth: '488px'
  },
  link: {
    color: 'rgba(255,255,255,0.6)'
  },
  sectionEnd: {
    marginBottom: theme.spacing.unit * 3
  }
});

const CalculatorHelp = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="title" gutterBottom>
        Read Me
      </Typography>
      <Typography variant="body1" className={classes.sectionEnd} gutterBottom>
        This tool uses the{' '}
        <a
          href="https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation"
          className={classes.link}
        >
          Harris–Benedict equation
        </a>{' '}
        to estimate your daily calorie requirements.
      </Typography>
      <Typography variant="subheading" gutterBottom>
        Activity Level
      </Typography>
      <Typography variant="body1" className={classes.sectionEnd} gutterBottom>
        The more active you are the more calories you use. Set this to the
        option that sounds about right to you. Remember that this is just an
        rough estimate.
        <ul>
          <li>Sedentary: Not Active</li>
          <li>Moderate: You work out 3 or 4 times a week.</li>
          <li>Very Active: You never stop.</li>
        </ul>
      </Typography>
      <Typography variant="subheading" gutterBottom>
        Dietary Goal
      </Typography>
      <Typography variant="body1" gutterBottom>
        Set this in line with your dietary goals.
        <ul>
          <li>Cut 20%: Lost weight.</li>
          <li>Cut 10%: Lose weight slowly.</li>
          <li>Maintain: Stay at the same weight you are now.</li>
          <li>Very Active: You never stop.</li>
          <li>Bulk 10%: Gain weight.</li>
        </ul>
      </Typography>
    </div>
  );
};

export default withStyles(styles)(CalculatorHelp);
