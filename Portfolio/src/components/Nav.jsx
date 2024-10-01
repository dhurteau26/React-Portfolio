import { Link } from 'react-router-dom';
import Navbar from './Navbar';


function Nav() {
    return (
        <Navbar
            links={[
                <Link key={1} className="nav-link text-light" to="/">Home</Link>,
                <Link key={2} className="nav-link text-light" to="./files/AboutMe">About Me</Link>,
                <Link key={3} className="nav-link text-light" to="./files/Project">Portfolio</Link>,
                <Link key={4} className="nav-link text-light" to="./files/Contact">Contact</Link>,
                
            ]}
        />
    );

}


export default Nav