import { useState } from 'react';
import Navbar from './Navbar';
import AboutMe from './files/AboutMe';
import Contact from './files/Contact';
import Portfolio from './files/Portfolio';
import Resume from './files/Resume'





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

        <main className="mx-3">{renderPage()}</main>

        <footer >
            Footer things
        </footer>
        </>
    );
}

