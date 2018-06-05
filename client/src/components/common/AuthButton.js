import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import styles from './AuthButton.style';

const AuthButton = ({
  classes,
  authService,
  fontIcon,
  imgIcon,
  color,
  backgroundColor,
  variant,
  onClick
}) => {
  return (
    <Button
      variant={variant}
      size="large"
      className={classes.root}
      style={{ color, backgroundColor }}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {fontIcon && (
        <i className={classNames(classes.icon, classes.fontIcon, fontIcon)} />
      )}
      {imgIcon && (
        <img
          src={imgIcon}
          className={classNames(classes.icon, classes.imgIcon)}
          alt=""
        />
      )}
      Sign In With {authService}
    </Button>
  );
};

export default withStyles(styles)(AuthButton);
