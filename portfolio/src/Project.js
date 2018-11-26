import React, { Component } from "react";
import * as path from "path";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import "./App.css";

const projectDir = path.join(process.env.PUBLIC_URL, "projects");

class Project extends Component {
  state = {
    expanded: false,
    title: null,
    date: null,
    desc: null,
    time_spent: null,
    client: null,
    collaborators: null,
    image_url: null,
    devpost: null,
    github: null,
    awards: null,
  };

  componentDidMount() {
    this.loadDesc();
  }

  loadDesc() {
    let projectPath = path.resolve(projectDir, this.props.name);    
    let jsonPath = path.join(projectPath, this.props.name + ".json");
    let testData = '{"title": "Babble", "tagline": "An Offline, Self-Propagating Messaging Platform for Low-Connectivity Areas", "type": "Hackathon", "date": "2018-09-07T22:00:00.000Z", "desc": "Babble is a messaging platform designed to be installed, setup, and used offline in a matter of minutes in areas with sparse, damanged, or inoperable internet connections. Prototyped on Android with Android Beam (to transfer the APK in under a minute to another phone), Android Nearby Connections (to create a mesh network of peer-to-peer bluetooth, wi-fi P2P, and NFC connections for messaging), and MongoDB Stitch (to upload messages to the cloud whenever a device in the network does go online).", "time_spent":"48 hours", "client": "PennApps XVIII", "collaborators":[{"name":"Aneek Muhkerjee"},{"name":"Emannuel Eppinger"}],"image_url": "placeholder.png","devpost": "https://github.com/ConlonNovak/pennapps18","github": "https://devpost.com/software/pennapps18-2pjcx0","awards":[{"award":"Top 30 Hack"},{"award":"PennApps Route | Wharton Risk Center: Best Hack for Resilience"},{"award":"MongoDB Sponsor Award: Best Use of MongoDB Stitch"},{"award":"Lutron Sponsor Award: Best IoT Hack"}]}';

    // fetch(jsonPath)
    //   .then(response => {
    //     return response.json();
    //   })
    let jsn = JSON.parse(testData);
      // .then(jsn => {
        this.setState({ title: jsn.title });
        this.setState({ tagline: jsn.tagline });
        this.setState({ date: jsn.date });
        this.setState({ desc: jsn.desc });
        this.setState({ time_spent: jsn.time_spent });
        this.setState({ client: jsn.client });
        this.setState({ collaborators: jsn.collaborators });
        this.setState({ image_url: jsn.image_url });
        this.setState({ devpost: jsn.devpost });
        this.setState({ github: jsn.github });
        this.setState({ awards: jsn.awards });
      // });
  }

  render() {
    return (
      <div className="row">
        <img className="project_hero" src={this.state.image_url}/>
        <p class="project_overlay">{this.state.title}</p>
        <Card>
          <CardContent>
            <p>lorem ipsum</p>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Project;