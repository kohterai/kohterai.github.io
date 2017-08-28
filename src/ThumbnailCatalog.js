import React, { Component } from 'react';
import {
} from 'react-router-dom'
import Thumbnail from './Thumbnail'
import ThumbnailLong from './ThumbnailLong'
import projectList from './ProjectList'
import ReactPlayer from 'react-player'
import $ from 'jquery'
import Waypoint from 'react-waypoint'


class ThumbnailCatalog extends Component {


  _enterSection(msg) {
    // this.setState({ message: msg });
    console.log(msg)
    console.log(`#menu-title-a-${msg}`)
    $(".menu-title-a").each(function() {
      $(this).removeClass("active")
    });
    $(`#menu-title-a-${msg}`).addClass("active")
  }

  _leaveSection(msg) {
    // this.setState({ message: msg });
    console.log(msg)
    console.log(`#menu-title-a-${msg}`)
    $(`#menu-title-a-${msg}`).removeClass("active")
  }

  render() {
    return (
      <div>
        {projectList.map((projectList, index) => (

          <div key={projectList.type} className="thumb-category-wrapper">
                      <Waypoint
            onEnter={this._enterSection.bind(this, `${projectList.type}`)}
            bottomOffset='40%'
            // onLeave={this._leaveSection.bind(this, `${projectList.type}`)}
          >
            <div className="thumbnailCategoryTitle" style={{
              textTransform: 'uppercase',
              fontWeight: '600',
              fontSize: '1.2em'}}>
              <div style={{marginTop: "30px"}} id={projectList.type}>{projectList.type}</div>
            </div>
            </Waypoint>


            {projectList.longThumb ? (
              <div>
              <div className="project-video-wrapper" style={{marginTop: "20px", marginBottom: "40px", backgroundColor: "black"}}>
                <ReactPlayer className="project-video" url='https://vimeo.com/201632847' width='100%' height='100%'/>
              </div>
              <div className="thumbnailContainer" style={{
                              display: 'flex',
                              flexWrap: 'wrap'}}>
                {projectList.projects.map((project, index) => (
                  <ThumbnailLong  key={project.title}
                              title={project.title}
                              caption={project.caption}
                              thumbnail1={project.thumbnail1}
                              thumbnail2={project.thumbnail2}
                              thumbnail3={project.thumbnail3}
                              path={project.path}/>
                ))}
              </div>
              </div>
            ) : (
              <div className="thumbnailContainer" style={{
                              display: 'flex',
                              flexWrap: 'wrap'}}>
                {projectList.projects.map((project, index) => (
                  <Thumbnail  key={project.title}
                              title={project.title}
                              caption={project.caption}
                              thumbnail={project.thumbnail}
                              path={project.path}/>
                ))}
              </div>
            )}
          </div>          
        ))}
      </div>
    )
  }
}

export default ThumbnailCatalog