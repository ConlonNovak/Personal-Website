import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Project from './Project.js';

//const projectDir = path.join(process.env.PUBLIC_URL, "projects");

class ProjectList extends Component {

  // componentDidMount() {
  //   this.loadProjects();
  // }

  // loadProjects(){
  //   this.loadProject("babble");
  //   this.loadProject("labyrinthine");
  //   this.loadProject("portfolio");
  //   this.loadProject("teachTiles");
  //   this.loadProject("trailerVR");
  //   this.loadProject("vidsumm");
  // }

  // loadProject(projectName){
  //   //let projectPath = path.resolve(projectDir, this.props.name);    
  //   //let jsonPath = path.join(projectPath, this.props.name + ".json");
  //   let jsonPath = path.join(projectDir, projectName + ".json");

  //   fetch(jsonPath)
  //     .then(response => {
  //       return response.json();
  //     })

  //   let jsn = JSON.parse(testData); //TO-DO - this should be done in ProjectList, go get the JSON and pass in as props.
  //     // .then(jsn => {
  //       this.setState({ title: jsn.title });
  //       this.setState({ tagline: jsn.tagline });
  //       this.setState({ type: jsn.type });
  //       this.setState({ year: jsn.year });
  //       this.setState({ desc: jsn.desc });
  //       this.setState({ time_spent: jsn.time_spent });
  //       this.setState({ client: jsn.client });
  //       this.setState({ collaborators: jsn.collaborators });
  //       this.setState({ skills: jsn.skills });
  //       this.setState({ images: jsn.images });
  //       this.setState({ links: jsn.links });
  //       this.setState({ awards: jsn.awards });
  //     // });
  // }


  render() {
    return (
      <div name="project_list">
        <Project name="babble"/>
        <Project name="labyrinthine"/>
        <Project name="portfolio"/>
        <Project name="teachTiles"/>
        <Project name="trailerVR"/>
        <Project name="vidsumm"/>   
      </div>
    );
  }
}

export default ProjectList;