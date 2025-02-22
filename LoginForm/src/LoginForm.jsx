import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Basic validation
        if (!username.trim() || !password.trim()) {
            setError('Username and password are required');
            return;
        }

        setError('');
        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:8080/api/users/login', {
                username,
                password
            });
            
            // Handle successful login
            if (response.data) {
                // Store token or handle authentication success
                localStorage.setItem('token', response.data.token);
                // You might want to redirect here or update app state
            }
        } catch (error) {
            setError(
                error.response?.data?.message || 
                'Login failed. Please check your credentials and try again.'
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
                {error && <div className="error-message">{error}</div>}
                <div className="form-group">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        disabled={isLoading}
                        className="form-input"
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
                    />
                </div>
                <button 
                    type="submit" 
                    disabled={isLoading}
                    className="submit-button"
                >
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
