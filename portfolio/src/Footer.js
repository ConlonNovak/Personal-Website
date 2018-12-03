import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit/3,
  },
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <IconButton className={classNames(classes.icon, 'fab fa-facebook-f fa-inverse')} color="primary" href="https://www.facebook.com/Conlon.Novak"/>
        <IconButton className={classNames(classes.icon, 'fab fa-twitter fa-inverse')} color="primary" href="https://twitter.com/Conlon_Novak"/>
        <IconButton className={classNames(classes.icon, 'fab fa-linkedin-in fa-inverse')} color="primary" href="https://www.linkedin.com/in/conlon-novak/"/>
        <IconButton className={classNames(classes.icon, 'fab fa-instagram fa-inverse fa-lg')} color="primary" href="https://instagram.com/conlonnovak/"/>
        <IconButton className={classNames(classes.icon, 'fab fa-github fa-inverse fa-lg')} color="primary" href="https://github.com/conlonnovak"/>
        <IconButton className={classNames(classes.icon, 'fab fa-tumblr fa-inverse')} color="primary" href="http://blog.conlonnovak.com/"/>                
        <IconButton className={classNames(classes.icon, 'fa fa-globe-americas fa-inverse fa-lg')} color="primary" href="http://travel.conlonnovak.com/"/>
        <br/>
        <div class="footer-copyright">
          <p>&#169; {(new Date()).getFullYear()} <a href="mailto:conlonnovak+website@cmu.edu">Conlon Novak</a>. All rights reserved. Made with <FavoriteBorder color="secondary"/> using <a href="https://reactjs.org/">React</a> and <a href="https://material-ui.com/">Material-UI</a>.</p> 
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);