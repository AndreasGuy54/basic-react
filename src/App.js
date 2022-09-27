import React from 'react';
// import logo from './react-logo.png';
import logo from './logo.svg';
import './App.css';

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

const Footer = () => {
    return (
        <footer>
            <small>© 2022 Abaidoo development. All rights reserved.</small>
        </footer>
    )
}

const MainContent = () => {
    return (
        <div className='main'>
            <h1>Reasons why I'm excited to learn React & Why You Should</h1>
            <ol>
                <li>React cool and popular</li>
                <li>React is powerful</li>
                <li>React has great community support and is maintained</li>
                <li>React is maintained by facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
            </ol>
        </div>
    )
}

const Page = () => {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}


const App = () => {
    return (
        <div>
            <Page />
        </div>
    )
}

export default App;