# User Authentication System

This project is a full-stack application that provides user registration and login functionality using React for the frontend and Spring Boot for the backend. The backend stores user data in a MongoDB database.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration with username and password.
- User login with authentication.
- Password encryption using BCrypt.
- React Router for navigation between login and registration pages.
- Styled components for a clean and modern UI.
- The users information is stored in the mongodb database.

## Technologies Used

- **Frontend**: React, React Router, Axios, CSS
- **Backend**: Spring Boot, Spring Data MongoDB, Spring Security
- **Database**: MongoDB
- **Build Tool**: Vite

## Setup

### Backend Setup

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <project-directory>
Navigate to the Backend Directory:


cd backend
Build and Run the Spring Boot Application:


./mvnw spring-boot\:run
Configure MongoDB:

Ensure MongoDB is running on localhost:27017.
Update application.properties with your MongoDB URI if different.
Frontend Setup
Navigate to the Frontend Directory:


cd frontend
Install Dependencies:


npm install
Run the Vite Development Server:


npm run dev
Access the Application:

Open your browser and navigate to http://localhost:5173.
Usage
Register a New User:

Navigate to the registration page using the navigation link.
Enter a username and password, then submit the form.
Upon successful registration, you will see a confirmation message.
Login:

Navigate to the login page using the navigation link.
Enter your registered username and password, then submit the form.
Upon successful login, you will see a confirmation message.
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.


### Explanation

- **Features**: Lists the key features of the application.
- **Technologies Used**: Describes the technologies and tools used in the project.
- **Setup**: Provides step-by-step instructions for setting up both the backend and frontend.
- **Usage**: Explains how to use the application.
- **Contributing**: Guidelines for contributing to the project.
- **License**: Information about the project's license.

