import { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import About from './pages/About';

export default function HomeContainer() {

   const [currentPage, setcurrentPage] = useState('About');

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

  const changeToPage = (page) => setcurrentPage(page);

    return (
        <div>        
        <Header /> 
        <Navigation currentPage={currentPage} changeToPage={changeToPage} />
        <main>{renderPage()}</main>
        <Footer />
        </div>
    );
}


