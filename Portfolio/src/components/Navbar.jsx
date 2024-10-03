
function Navbar({currentPage, handlePageChange}) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                        Home
                    </a>
            </li>
            <li className="nav-item">
                <a
                    href="Portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>

                    </a>
            </li>
            <li className="nav-item">
                <a 
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                        Contact
                    </a>
            </li>

        </ul>
    );
}

export default Navbar;