import React from 'react';

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function Navbar({ currentPage, handlePageChange }) {
  return (
    <>
    <div className="px-3 sticky-top">
      <nav className="navbar navbar-light navbar-expand-lg bg-light">
        <img src="/portfolio/images/self-portrait.png" className="d-inline-block align-top navbar-img " alt="self-portrait"/>
        <a className="navbar-brand" href="#About-Me">Mariah Wear</a>
    
  <div className="navbar-justify">
    <ul className="navbar-nav">
      <li>
        <a href="#About-Me" onClick={() => handlePageChange('About')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me <span className="sr-only"></span></a>
      </li>
      <li>
        <a href="#Portfolio" onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `About`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
      </li>
      <li>
        <a href="#Contact-Me" onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact Me</a>
      </li>
      <li>
        <a href="#Resume" onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Resume`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
      </li>


    </ul>
    </div>
</nav>
  </div>
   </>
  );
}

export default Navbar;
