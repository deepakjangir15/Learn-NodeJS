# Learn-NodeJS

Welcome to the Learn-NodeJS repository! This project was created as part of my journey to learn Node.js, where I utilized Express, MongoDB, Express Router, and MVC architecture. The primary goal of this project was to build a simple blog application and handle various types of requests. 

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the project, please follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/deepakjangir15/Learn-NodeJS.git
   ```

2. Navigate to the project directory:

   ```
   cd Learn-NodeJS
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

4. Set up the MongoDB database. Make sure you have MongoDB installed and running on your system. Update the MongoDB connection settings in `config/database.js` file.

5. Start the application:

   ```
   npm start
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

## Features

This project demonstrates the following features:

- User authentication and authorization
- Create, read, update, and delete (CRUD) operations for blog posts
- User registration and login functionality
- Middleware to protect routes and ensure authenticated access
- MVC (Model-View-Controller) architecture
- Express Router for handling routes
- Integration with MongoDB for data storage

## Usage

Once you have the application up and running, you can access it in your web browser at [http://localhost:3000](http://localhost:3000).

Here are the available routes:

- **GET /add-blog**: Displays the form to add a new blog.
- **POST /add-blog**: Creates a new blog post.
- **GET /all-blogs**: Retrieves all blog posts.
- **GET /blogs**: Redirects to /all-blogs.
- **GET /about**: Displays information about the project.
- **GET /blogs/create**: Displays the form to create a new blog post.
- **POST /blogs/create**: Creates a new blog post with the provided data.
- **GET /blogs/:id**: Retrieves a specific blog post by its ID.

Please note that some routes require authentication. If you attempt to access a protected route without logging in, you will be redirected to the login page.

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request. Let's learn and grow together!

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as you see fit.
