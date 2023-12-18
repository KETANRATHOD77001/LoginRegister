import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/auth/register', {
                name,
                email,
                password,
            });

            // Handle successful registration (e.g., navigate to login page)
            window.alert(response.data.message);
        } catch (error) {
            // Handle registration error
            console.error('Registration error:', error.response.data.message);
        }
    };

    return (
        <>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <label>Name:
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="submit">Register</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login here</Link>.
            </p>
        </>
    )
}
export default Register