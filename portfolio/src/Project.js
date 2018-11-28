import React, { Component } from "react";
import * as path from "path";
import classnames from 'classnames';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import TrophyIcon from '@material-ui/icons/Trophy'; //does this work? name?
import Badge from '@material-ui/core/Badge';

import "./App.css";

const projectDir = path.join(process.env.PUBLIC_URL, "projects");

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
    let projectPath = path.resolve(projectDir, this.props.name);    
    let jsonPath = path.join(projectPath, this.props.name + ".json");
    let testData = '{"title": "Babble","tagline": "An Offline, Self-Propagating Messaging Platform for Low-Connectivity Areas","type": "Hackathon","year": "2018","desc": "Babble is a messaging platform designed to be installed, setup, and used offline in a matter of minutes in areas with sparse, damanged, or inoperable internet connections. Prototyped on Android with Android Beam (to transfer the APK in under a minute to another phone), Android Nearby Connections (to create a mesh network of peer-to-peer bluetooth, wi-fi P2P, and NFC connections for messaging), and MongoDB Stitch (to upload messages to the cloud whenever a device in the network does go online).","time_spent":"36 hours","client": "PennApps XVIII","collaborators":[{"name":"Aneek Muhkerjee"},{"name":"Emannuel Eppinger"}],"skills":[{"name":"Mobile Development", "type":"experience"},{"name":"Java"},{"name":"Android Studio"},{"name":"MongoDB"}],"images":[],"links":[{"name":"Website", "link":"https://eppi.ng/pennapps18/"},{"name":"Devpost", "link":"https://devpost.com/software/pennapps18-2pjcx0"},{"name":"Github", "link":"https://github.com/ConlonNovak/pennapps18"}],"awards":[{"award":"Top 30 Hack"},{"award":"PennApps Route | Wharton Risk Center: Best Hack for Resilience"},{"award":"MongoDB Sponsor Award: Best Use of MongoDB Stitch"},{"award":"Lutron Sponsor Award: Best IoT Hack"}]}';
    
    // {
    //   "title": "Babble", 
    //   "tagline": "An Offline, Self-Propagating Messaging Platform for Low-Connectivity Areas", 
    //   "type": "Hackathon", 
    //   "year": "2018", 
    //   "desc": "Babble is a messaging platform designed to be installed, setup, and used offline in a matter of minutes in areas with sparse, damanged, or inoperable internet connections. Prototyped on Android with Android Beam (to transfer the APK in under a minute to another phone), Android Nearby Connections (to create a mesh network of peer-to-peer bluetooth, wi-fi P2P, and NFC connections for messaging), and MongoDB Stitch (to upload messages to the cloud whenever a device in the network does go online).", 
    //   "time_spent":"36 hours", 
    //   "client": "PennApps XVIII", 
    //   "collaborators":[
    //             {"name":"Aneek Muhkerjee"},
    //             {"name":"Emannuel Eppinger"}
    //            ], 
    //   "skills":[
    //             {"name":"Mobile Development"},
    //             {"name":"Java"},
    //             {"name":"Android Studio"},
    //             {"name":"MongoDB"}
    //            ], 
    //   "images":[
                
    //           ],
    //   "links":[
    //             {"name":"Website", "link":"https://eppi.ng/pennapps18/"},
    //             {"name":"Devpost", "link":"https://devpost.com/software/pennapps18-2pjcx0"},
    //             {"name":"Github", "link":"https://github.com/ConlonNovak/pennapps18"}
    //           ],
    //   "awards":[
    //             {"award":"Top 30 Hack"},
    //             {"award":"PennApps Route | Wharton Risk Center: Best Hack for Resilience"},
    //             {"award":"MongoDB Sponsor Award: Best Use of MongoDB Stitch"},
    //             {"award":"Lutron Sponsor Award: Best IoT Hack"}
    //            ]
    // }

    // fetch(jsonPath)
    //   .then(response => {
    //     return response.json();
    //   })

    let jsn = JSON.parse(testData);
      // .then(jsn => {
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
      // });
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
    let footer_text = this.state.title + " was made over " + this.state.time_spent;
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

  generateAwards(){
    let elements = []
    if (this.state.awards != null) {
      for (let i=0; i<this.state.awards.length; i++){
        elements.push("");
      }
    }
    return(elements); 
  }

  generateLinks(){
    let elements = []
    if (this.state.links != null) {
      for (let i=0; i<this.state.links.length; i++){
        elements.push(<Button color="primary" href={this.state.links[i].link}>{this.state.links[i].name}</Button>);
      }
    }
    return(elements); 
  }

  generateChips(){
    let elements = []
    if (this.state.type != null) {
      elements.push(<Chip label={this.state.type} className={this.props.chip} color="primary"/>);
    }
    if (this.state.skills != null) {
      for (let i=0; i<this.state.skills.length; i++){
        if (this.state.skills[i].type != null && this.state.skills[i].type === 'experience'){
          elements.push(<Chip label={this.state.skills[i].name} className={this.props.chip} color="secondary"/>);
        }
        else {
          elements.push(<Chip label={this.state.skills[i].name} className={this.props.chip} variant="outlined" color="secondary"/>);
        }
      }
    }
    return(elements); 
  }

  renderProject() {
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
            subheader={this.state.tagline + ", made for " + this.state.client + ", " + this.state.year}
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
            <IconButton
              className={classnames(this.state.expand, {
                [this.state.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
            <ExpandMoreIcon />
          </IconButton>
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

export default Project;