import { Link } from 'react-router-dom';

export function NavBar() {
    return (
        <nav className='navmenu'>
            <div>
            <h1> EZDrive </h1>
            </div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/guide">Guide</Link></li>
                    <li><Link to="/info">Info</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;