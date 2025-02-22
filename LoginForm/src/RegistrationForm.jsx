import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Validation
        if (!username.trim() || !password.trim()) {
            setError('Username and password are required');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        setError('');
        setMessage('');
        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:8080/api/users/register', {
                username,
                password
            });
            setMessage('Registration successful! You can now login.');
            // Clear form
            setUsername('');
            setPassword('');
        } catch (error) {
            setError(
                error.response?.data?.message || 
                'Registration failed. Please try again.'
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit} className="register-form">
                <h2>Register</h2>
                {error && <div className="error-message">{error}</div>}
                {message && <div className="success-message">{message}</div>}
                <div className="form-group">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        disabled={isLoading}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        disabled={isLoading}
                        className="form-input"
                        required
                    />
                </div>
                <button 
                    type="submit" 
                    disabled={isLoading}
                    className="submit-button"
                >
                    {isLoading ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
    );
}

export default RegistrationForm;
