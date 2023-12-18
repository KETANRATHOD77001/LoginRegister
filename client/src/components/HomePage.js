import React from 'react'
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <h2>Welcome to the Front Page!</h2>
            <p>
                Check out our services and get started:
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </p>
        </>
    );
}

export default HomePage