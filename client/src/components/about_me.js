import React from 'react';

function About() {
    return (
        <div className="container py-4">
            <h2 className="h2" id="About-Me">About Me:</h2>
            <div className="justify-content-center">
                <img src="/react-portfolio/images/headshot.png" className="headshot-img" alt=" headshot "/>

            </div>
            <p>I am a novice and aspiring full stack developer and coder.  My career path and journey through life has been non-traditional. By following my passion
                as it has evolved I have learned deep truths about my strengths and talents.  A common denominator of every position I've held
                is a love for solving puzzles and finding concise and functional solutions to problems.</p>
            <img src="/react-portfolio/images/mountain-panorama.jpg" className="img-fluid" alt=" mountain "/>
            <p>I live in Montana and am an avid outdoor lover for recreation. I'm hoping to balance the time I spend recreating alongside my family with productive and meaningful work in the field of web development.</p>
        </div>
    )
}

export default About;