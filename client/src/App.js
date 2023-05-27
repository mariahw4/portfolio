import { useState } from 'react'
// import { ThemeContext } from './contexts/theme'
import Navbar from './components/navbar'
import Footer from './components/footer'
import About from './components/about_me'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import Resume from './components/resume'
import './App.css'

const App = () => {

    const [currentPage, setCurrentPage] = useState('About');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      return <Resume />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
        <Footer />
      </div>
    );
  }






  // return (
  //   <div>
     

  //     <main>
  //       <About />
  //       <Portfolio />
  //       <Contact /> 
  //       <Resume />
  //     </main>

     
  //   </div>
  // )


export default App
