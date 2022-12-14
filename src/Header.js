import logo from './logo.svg';

const Header = () => {
    return (
        <header>
            <nav className='nav'>
                <img src={logo} className='nav-logo' alt="react-logo"/>
                <ul className='nav-items'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header