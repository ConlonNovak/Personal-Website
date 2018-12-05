import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  typography: {
    margin: theme.spacing.unit * 2,
  },
});

class AwardsPopoverButton extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const awardList = this.props.awards.map((d) => <li key={d.name}>{d.name}</li>);


    return (
      <div>
        <IconButton aria-label="" onClick={this.handleClick}> 
          <Badge badgeContent={this.props.awards.length} color="primary">
            <i class="fas fa-trophy"></i>
          </Badge>
        </IconButton>

        <Popover
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Typography className={classes.typography}>{awardList}</Typography>
        </Popover>
      </div>
    );
  }
}

// SimplePopover.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(AwardsPopoverButton);