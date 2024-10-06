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
                       <h2 id='color'>About Me</h2> 
                    </a>
            </li>
            <li>
                <a
                    href="#portfolio" 
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                        <h2 id='color'>Portfolio</h2>
                    </a>
            </li>
            <li>
                <a 
                    href="#resume" 
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                        <h2 id='color'>Resume</h2>   
                    </a> 
            </li>
            <li>
                <a 
                    href="#contact" 
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                        <h2 id='color'>Contact</h2>
                    </a>
            </li>

        </ul>
    );
}

export default Navbar;