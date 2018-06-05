import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    padding: `0 ${theme.spacing.unit * 6}px`,
    maxWidth: '488px'
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
      <Typography variant="body1" gutterBottom>
        This tool uses a <i>FORMULA</i> to figure out how many calories you
        should be eating daily to meet your <i>GOALS.</i> Everybody is
        different, and the result is rough estimate only, so don't fret too much
        over the finer points.
      </Typography>
      <Typography variant="body1" className={classes.sectionEnd} gutterBottom>
        Once you save your results and start recording <i>FOOD LOGS</i> and{' '}
        <i>WEIGH INS</i>, Calary Man will start adjusting your recommended
        intake to be more accurate. <i>See: TDEE Accuracy and Adjustment</i>
      </Typography>
      <Typography variant="subheading" gutterBottom>
        Activity Level
      </Typography>
      <Typography variant="body1" className={classes.sectionEnd} gutterBottom>
        The more active you are the more calories you use. Set this to the
        option that sounds about right to you. Remember that this is just an
        rough estimate.
      </Typography>
      <Typography variant="subheading" gutterBottom>
        Dietary Goal
      </Typography>
      <Typography variant="body1" gutterBottom>
        Set this in line with your dietary goals. Not sure you have one? Check
        out the Setting Goals section of the FAQ.
      </Typography>
    </div>
  );
};

export default withStyles(styles)(CalculatorHelp);
