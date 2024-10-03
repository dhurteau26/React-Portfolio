import { useState } from 'react';
import Navbar from './Navbar';
import Home from './files/Home';
import Contact from './files/Contact';
import Portfolio from './files/Portfolio';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
        <header className="header">
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            
        </header>

        <main className="mx-3">{renderPage()}</main>

        <footer className="footer"></footer>
        </>
    );
}

