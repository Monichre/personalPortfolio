import React from 'react'

const ProjectNavigation = () => {
  return (<div className="project-navigation-wrapper">
    <nav>
      <ul id="project-nav" className="project-navigation">
        <li className="active">
          <a datamenuanchor="sabrina-fashion" onClick={this.handleNavClick.bind(this)} href="#sabrina-fashion">I</a>
        </li>
        <li>
          <a datamenuanchor="jana-yoga" onClick={this.handleNavClick.bind(this)} href="#jana-yoga">II</a>
        </li>
        <li>
          <a datamenuanchor="jud-nichols" onClick={this.handleNavClick.bind(this)} href="#jud-nichols">III</a>
        </li>
        <li>
          <a datamenuanchor="hudson-reade" onClick={this.handleNavClick.bind(this)} href="#hudson-reade">IV</a>
        </li>
      </ul>
    </nav>
  </div> );
}
 
export default ProjectNavigation;