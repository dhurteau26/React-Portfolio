import { useState } from 'react';
import Navbar from './Navbar';
import AboutMe from './files/AboutMe';
import Contact from './files/Contact';
import Portfolio from './files/Portfolio';
import Resume from './files/Resume';
import './styles/AboutMe.css';
import 'bootstrap/dist/css/bootstrap.min.css';





export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }   
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
        <header>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            
        </header>

        <main >{renderPage()}</main>

        <footer >
           <a href="https://github.com/dhurteau26">
                <img src="./src/assets/github.png" width="50px"></img>
            </a>
            <a href="/">
                <img src="./src/assets/social.png" width="60px"></img>
            </a>
        </footer>
        </>
    );
}

