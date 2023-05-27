import React from 'react';

function Resume() {
    return (
    <div className="container">
        <h2 className="h2" id="Resume">Resume & Proficiencies:</h2>

        <a href='./full-stack-resume.pdf' download>Click to download my Resume</a>

        <h3>Proficiencies:</h3>
        <ul>
            <li>Programming Languages: JavaScript ES6+, CSS3, HTML5, jQuery</li>
            <li>Databases: MySql, NoSql, MongoDB</li>
            <li>Frameworks and Libraries: React, Express, Node, MVC, PWA, Jest</li>
            <li>UI Frameworks: Bootstrap, Bulma, React-Bootstrap</li>
            <li>Version Control and Deployment: GitHub, Heroku</li>
        </ul>
        
        
    </div>
)
}

export default Resume;