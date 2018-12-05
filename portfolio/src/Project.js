import React, { Component } from "react";
import * as path from "path";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
// import Popover from '@material-ui/core/Popover';
// import Badge from '@material-ui/core/Badge';
import "./App.css";
import AwardsPopoverButton from './AwardsPopoverButton.js';
import Tooltip from '@material-ui/core/Tooltip';


const projectDir = path.join(process.env.PUBLIC_URL, "projects");
const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  chip: {
    padding: theme.spacing.unit / 2,
    margin: theme.spacing.unit / 2,
  },
});


class Project extends Component {
  state = {
    expanded: false,
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  componentDidMount() {
    this.loadDesc();
  }

  loadDesc() {
    // let projectPath = path.resolve(projectDir, this.props.name);    
    // let jsonPath = path.join(projectPath, this.props.name + ".json");

    //let testData = '{"title": "Test Project","tagline": "Something something cryptocurrency something brain-power something machine learning","type": "Project Type","year": "20XX","desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","time_spent":"## time","client": "Client Name","collaborators":[{"name":"Collaborator 1"},{"name":"Collaborator 2"},{"name":"Collaborator 3"}],"skills":[{"name":"Experience Category", "type":"experience"},{"name":"Skill 1"},{"name":"Skill 2"},{"name":"Skill 3"}],"images":null,"links":[{"name":"Website", "link":""},{"name":"Devpost", "link":""},{"name":"Github", "link":""},{"name":"News", "link":""},{"name":"Dribbble", "link":""}],"awards":[{"name":"Award 1"},{"name":"Award 2"},{"name":"Award 3"}]}';
    //let jsn = JSON.parse(testData); 

    /*fetch(verdantPath + "/" + this.props.name + ".json")
    .then(response => {
      return response.json();
    })
    .then(jsn => {
      this.setState({ title: jsn.title });
      this.setState({ desc: jsn.desc });
    });*/

    //TO-DO - this should be done in ProjectList, go get the JSON and pass in as props.
    let jsonPath = path.join(projectDir, this.props.name + ".json");
    fetch(jsonPath)
      .then(response => {
        return response.json();
      })
      .then(jsn => {
        this.setState({ title: jsn.title });
        this.setState({ tagline: jsn.tagline });
        this.setState({ type: jsn.type });
        this.setState({ year: jsn.year });
        this.setState({ desc: jsn.desc });
        this.setState({ time_spent: jsn.time_spent });
        this.setState({ client: jsn.client });
        this.setState({ collaborators: jsn.collaborators });
        this.setState({ skills: jsn.skills });
        this.setState({ images: jsn.images });
        this.setState({ links: jsn.links });
        this.setState({ awards: jsn.awards });
      });
  }

// expand: {
//     transform: 'rotate(0deg)',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//     marginLeft: 'auto',
//     [theme.breakpoints.up('sm')]: {
//       marginRight: -8,
//     },
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },

  generateFooterText(){
    let footer_text = this.state.title + " was made over " + this.state.time_spent  + " for " + this.state.client + " (" + this.state.year + ")";
    if (this.state.collaborators != null && this.state.collaborators.length > 0) {
      footer_text += " in collaboration with ";
      if (this.state.collaborators.length === 1) {
        footer_text += this.state.collaborators[0].name;
      }
      else if (this.state.collaborators.length === 2) {
        footer_text += this.state.collaborators[0].name + " and " + this.state.collaborators[1].name;
      }
      else if (this.state.collaborators.length > 2){
        for (let i=0; i<this.state.collaborators.length; i++){
          footer_text += this.state.collaborators[i].name;
          if (i === this.state.collaborators.length-2){
            footer_text += ", and ";
          }
          else if (i < this.state.collaborators.length-2){
            footer_text += ", ";
          }
        }
      }
    }
    footer_text += ".";
    return(footer_text);
  }

  generateAwards(){//className={classes.margin}>
    let elements = []
    const { classes } = this.props;
    if (this.state.awards != null && this.state.awards.length >= 1) {
      elements.push(<Button disabled className={classes.button}>Awards</Button>);
      elements.push(<AwardsPopoverButton awards = {this.state.awards}/>);
      return(elements); 
    }
  }

  generateChips(){
    const { classes } = this.props;
    let elements = []
    if (this.state.type != null) {
      elements.push(<Chip label={this.state.type} className={classes.chip} color="primary"/>);
    }
    if (this.state.skills != null) {
      for (let i=0; i<this.state.skills.length; i++){
        if (this.state.skills[i].type != null && this.state.skills[i].type === 'experience'){
          elements.push(<Chip label={this.state.skills[i].name} className={classes.chip} color="secondary"/>);
        }
        else {
          elements.push(<Chip label={this.state.skills[i].name} className={classes.chip} variant="outlined" color="secondary"/>);
        }
      }
    }
    return(elements); 
  }

  generateLinks(){
    const { classes } = this.props;
    let elements = []
    if (this.state.links != null) {
      elements.push(<Button disabled className={classes.button}>Links</Button>);
      for (let i=0; i<this.state.links.length; i++){
        if (this.state.links[i].name === "Website"){
          // elements.push(<div><Tooltip title="Website"><IconButton className={classNames(classes.icon, 'fa fa-globe-americas fa-inverse fa-lg')} color="primary" href={this.state.links[i].link}/></Tooltip></div>);
          // elements.push(<Tooltip title="Website"><IconButton className={classNames(classes.icon, 'fa fa-globe-americas fa-inverse fa-lg')} color="primary" href={this.state.links[i].link}/></Tooltip>);
          elements.push(<IconButton className={classNames(classes.icon, 'fa fa-globe-americas fa-inverse fa-lg')} color="primary" href={this.state.links[i].link}/>);

        }
        else if (this.state.links[i].name === "Github"){
          elements.push(<IconButton className={classNames(this.props.icon, 'fab fa-github fa-inverse fa-lg')} color="primary" href={this.state.links[i].link}/>);
        }
        else if (this.state.links[i].name === "Devpost"){
          elements.push(<IconButton className={classNames(this.props.icon, 'fab fa-dev fa-inverse fa-lg')} color="primary" href={this.state.links[i].link}/>);
        }
        else if (this.state.links[i].name === "Dribbble"){
          elements.push(<IconButton className={classNames(this.props.icon, 'fas fa-basketball-ball fa-inverse fa-lg')} color="primary" href={this.state.links[i].link}/>);
        }
        else if (this.state.links[i].name === "News"){
          elements.push(<IconButton className={classNames(this.props.icon, 'fas fa-newspaper fa-inverse fa-lg')} color="primary" href={this.state.links[i].link}/>);
        }
        else{
        elements.push(<Button color="primary" href={this.state.links[i].link}>{this.state.links[i].name}</Button>);
        }
      }
    }
    elements.push(this.generateAwards());
    return(elements); 
  }


  renderProject() {
    const { classes } = this.props;
    return (
    // title          -
    // year 
    // desc           - 
    // time_spent     -
    // client         -
    // collaborators  -
    // image_url
    // link_url       -
    // devpost        -
    // github         - 
    // awards
    // type
    // skills

      <div className="row">
        <Card className={this.state.type}>
          <CardHeader
            // avatar={
            //   <Avatar aria-label="Recipe" className={classes.avatar}>
            //     R
            //   </Avatar>
            // }
            title={this.state.title}
            subheader={this.state.tagline}
          />
          <CardMedia
            className="project_media"
            image={this.state.image_url}
            title={this.state.title}
          />
          <CardContent>
            <div className="project_skills">{this.generateChips()}</div>
          </CardContent>
          <CardActions>
            {this.generateLinks()}
          <div className={classNames(classes.expand)}>
            <Button disabled>{ this.state.expanded ? "Hide": "View" } Details</Button>
            <IconButton
              className={classNames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </div>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {this.state.desc}
            </Typography>
            <Typography paragraph>
              {this.generateFooterText()}
            </Typography>
          </CardContent>
        </Collapse>
        </Card>
      </div>
    );
  }

render() {
  return (
    <div>
      {this.renderProject()}
    </div>
    )
  }
}

export default withStyles(styles)(Project);