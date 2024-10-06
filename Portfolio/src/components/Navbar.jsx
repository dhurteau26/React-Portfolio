import './styles/nav.css';
function Navbar({currentPage, handlePageChange}) {
    return (
        
        <ul className='container'>
            <h3>Derek Hurteau</h3>
            <li className='tab1'>
                <a
                    href="#AboutMe"
                    onClick={() => handlePageChange('AboutMe')}
                    className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
                        About Me
                    </a>
            </li>
            <li>
                <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                        Portfolio
                    </a>
            </li>
            <li>
                <a 
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                        Resume    
                    </a> 
            </li>
            <li>
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