var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;




//Landing screen where user selects which mode.  Clicking mode will switch out components w/ appropiate mode.
var SelectMode = React.createClass({
  render: function() {
    return(
      <div className="selectMode">
        <h1 id="modeSelectTitle">KOH TERAI</h1>

        <Link to="developer">
          <img className="circularPhoto" src="images/KohApple-Circular.png" />
          <h2 className="modeLabel">product designer</h2>
        </Link>

        <Link to="photographer">
          <img className="circularPhoto" src="images/KohCamera-Circular.png" />
          <h2 className="modeLabel">photographer</h2>
        </Link>
      </div>
    )
  }
});


//In charge of the projects menubar and loading projects
var ProjectDisplay = React.createClass({
  getInitialState: function() {
    return {
      mode: this.props.mode,
    };
  },
  render: function() {
    //which menuList to send into the menu is decided here
    if (this.state.mode == 'Developer'){
      var menuList = DeveloperDetails
    };
    return(
      <div>
        <div id="projectElements">
          <ProjectsMenu menuList={menuList} setProject={this.setProject}/>
          <div className="projectDetail">
            <this.props.activeRouteHandler/>
          </div>
        </div>
      </div>
    );
  }
})


/*ProjectsMenu is created from the projects constant set
which set to choose from is determined by this.state.mode*/
var ProjectsMenu = React.createClass({
  render: function() {
    //Each menuList is a dict of {tite: , description:, keyword: }
    //item['description'] to print out desciption as well
    return (
      <ul className="menuList">
        <div id="menuKohHeading">Koh Terai</div>
        <div id="projectHeading">Projects</div>
        {this.props.menuList.map(function(item){
          return (
            <Link to={item['keyword']}>
              <li key={item['keyword']} className="menuItem">
              <div className="menuItem">{item['title']}</div>
              </li>
            </Link>  
            );
          }, this)
        }
      </ul>
    )
  }
});

var NYUVote = React.createClass({
  render: function() {
    return(
      <div>
        <h2>NYU Vote</h2>
        <h3>Target audience of 20,000 over the NYU Global Network</h3>
        <p>NYU Vote is an open source live voting platform designed to be the union of capability and simplicity.  It has an ultra simple user-facing ballot interface, as well as a minimilistic admin interface.  I lead the design and coded the front-end for this project.  The target audience was 20,000 students from NYU New York, Abu Dhabi, and Shanghai collectively.</p>
        <img className='fullWidth' src='images/VoteHome.png' />
        <p>The app was designed mobile first to accomidate high volumes of students voting through mobile devices.  NYU Vote is built with a responsive design and runs seamlessly on tablets and desktop computers as well.</p>
        <div className='halfWidthContainer'>
          <img className='halfWidth thinBorder left' src='images/VoteMobile-1.png' />
          <img className='halfWidth thinBorder right' src='images/VoteMobile-2.png' />
        </div>
        <img className='fullWidth thinBorder' src='images/VoteEnteringBallot.png' />
        <p>The green color which is often associated with validity is used throughout the design to make users feel secure about the voting app.</p>
        <img className='fullWidth thinBorder' src='images/VoteBallot.png' />
        <p>Extra emphasis was put into making the casting of the ballots as unambiguous as possible. The changing prompts and colors of the progress bar button was used to guide the user through process.</p>
        <img className='fullWidth' src='images/VoteButtonFlow.png' />
        <div className='center'>
          <a className="button" href="https://vote.nyuapps.com/" target="_blank"><i className="fa fa-laptop"></i>View Website</a>
          <a className="button" href="https://github.com/hackAD/nyu-vote" target="_blank"><i className="fa fa-code"></i>Examine Code</a>
        </div>
      </div>
    )
  }
})


var Georgia = React.createClass({
  render: function() {
    return(
      <p>Yay we are isnide of Georgia</p>
    )
  }
})

//Title is what shows up in the menu list
var DeveloperDetails = [
  {title: 'NYU Vote', description: 'Voting Service', keyword: 'nyuvote'},
  {title: 'Yalla', description: 'Event Sharing Applicaton', keyword: 'yalla'},
  {title: 'WellSense', description: 'Well analytics', keyword: 'wellsense'},
  {title: 'Student Voice', description: 'Student Service Communication ', keyword: 'studentvoice'},
  {title: 'Misc Works', description: 'Research and Classwork', keyword: 'miscswork'}
];


//name must be identical to the keyword inside menu keyword
//we use the ProjectDisplay component but with the mode parameter as Photographer
var routes = (
  <Routes location="hash">
    <Route path="/" handler={SelectMode} />
    <Route path="/dev" name="developer" mode={"Developer"} handler={ProjectDisplay}>
      <Route name="nyuvote" handler={NYUVote} />
      <Route name="yalla" handler={NYUVote} />
      <Route name="wellsense" handler={NYUVote} />
      <Route name="studentvoice" handler={NYUVote} />
      <Route name="miscswork" handler={NYUVote} />
    </Route>
    <Route path="/photo" name="photographer" mode={"Photographer"} handler={ProjectDisplay}>
      <Route name="georgia" handler={Georgia} />
    </Route>
  </Routes>
);


React.render(
  routes, document.getElementById('container')
);