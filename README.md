

# LogRegMern

## Description

This project implements a user authentication system using the MERN stack (MongoDB, Express.js, React, Node.js). It provides functionality for user registration, login, logout, and session management.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/harshvardhans402/LogRegMERN.git
   ```
2. Navigate to the project directory:
   ```bash
   cd backend
   ```
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server for frontend:
   ```bash
   npm run dev 
   ```
2. Start the server for backend:
   ```bash
   node server.js 
   ```
   


## Technologies Used

- MongoDB: Database for storing user information.
- Express.js: Backend framework for handling API requests.
- React: Frontend library for building user interfaces.
- Node.js: Backend environment for running the server.
- Redux Toolkit: State management library for managing user authentication state.
- Axios: HTTP client for making API requests.
- React Router: Library for routing in React applications.
- React Bootstrap: UI components library for React applications.

## Folder Structure

```
project-root/
│
├── backend/             # Backend server files
│   ├── controllers/     # Controllers for handling API requests
│   ├── models/          # Mongoose models for MongoDB
│   ├── routes/          # API routes
│   ├── config/          # Configuration files (e.g., MongoDB connection)
│   └── server.js        # Express.js server setup
│
├── frontend/            # Frontend React application
│   ├── public/          # Public assets
│   ├── src/             # Source files
│   │   ├── components  # React components
│   │   ├── features/    # Redux features (e.g., userSlice)
│   │   ├── pages/       # React Router pages
│   │   ├── App.js       # Main React component
│   │   └── index.js     # React DOM rendering
│   └── package.json     # Frontend dependencies and scripts
│
├── README.md            # Project documentation
└── package.json         # Backend dependencies and scripts
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.



