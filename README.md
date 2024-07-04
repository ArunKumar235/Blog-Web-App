# Blog Web App

This Node.js application is a simple blog web application where users can create, view, update, and delete blog posts. The project utilizes the `express` framework for server-side operations, `body-parser` for parsing request bodies, and `ejs` for templating.

## Features

- **Create a Blog**: Users can write and save new blog posts with a title, author, and content.
- **View Blogs**: Users can view a list of all blog posts.
- **Update a Blog**: Users can update existing blog posts.
- **Delete a Blog**: Users can delete blog posts.

## Technologies

- Node.js
- Express
- Body-Parser
- EJS

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ArunKumar235/Blog-Web-App.git
    ```
2. Navigate to the project directory:
    ```sh
    cd Blog-Web-App
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Run the application:
    ```sh
    node index.js
    ```
2. Open your browser and navigate to `http://localhost:3000` to start using the application.

## Project Structure

- **index.js**: Main server file. Sets up routes and handles requests.
- **views**: Contains EJS templates for rendering pages.
  - **partials**: Contains partial EJS files (header, footer).
  - **index.ejs**: Template for the home page.
  - **create.ejs**: Template for creating a new blog post.
  - **view.ejs**: Template for viewing blog posts.
  - **update.ejs**: Template for updating blog posts.
- **public**: Contains static files (CSS, JS).

## Routes

- **GET /**: Renders the home page.
- **GET /create**: Renders the page to create a new blog post.
- **POST /submit**: Handles the creation of a new blog post.
- **GET /view**: Renders the page to view all blog posts.
- **GET /update**: Renders the page to update a blog post.
- **POST /update**: Handles the update of an existing blog post.
- **POST /delete**: Handles the deletion of a blog post.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.