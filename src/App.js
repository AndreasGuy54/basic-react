import React from 'react';
// import logo from './react-logo.png';
import logo from './logo.svg';
import './App.css';

const Page = () => {
    return (
        <>
            <header>
                <nav>
                    <img src={logo} alt="react-logo" width="125"/>
                </nav>
            </header>
            <h1>Reasons why I'm excited to learn React</h1>
            <ol>
                <li>React cool and popular</li>
                <li>React is powerful</li>
                <li>React has great community support</li>
                <li>React is maintained by facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
            </ol>

            <footer>
                © 2022 Abaidoo development. All rights reserved.
            </footer>
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