# Blog Website using React

This project is a responsive blogging website built using React.js, Express, Node.js, and MongoDB. It offers a user-friendly interface for adding and displaying blog posts, including a dynamic post submission form, and sections for the latest and trending posts.

## Features

- **Dynamic Post Submission:** Users can add new posts with a title, description, and an optional image link.
- **Reverse Order Display:** Newly added posts appear at the top of the post list, using the reverse array mapping.
- **Image Handling:** If an image link is not provided for a post, a default image is displayed.
- **Sections for Latest and Trending Posts:** Dedicated sections for showcasing the latest and trending blog topics.
- **Responsive Design:** The site is fully responsive, ensuring a seamless experience across various devices.
- **Interactive UI Elements:** Includes a header, navigation bar, and footer for easy navigation.
- **Conditional Form Display:** The post submission form is displayed only when the 'Add Post' button is clicked.
- **React Hooks:** Utilizes React's `useState`, `useEffect` hooks for managing posts, form inputs, fetching, saving and updating posts.
- **Timestamps:** Each post displays the time of its upload, providing additional context.

## Installation and Setup

To run or test this project locally, follow these steps:

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/singhkailash9/blog-site-react.git
   ```

2. Navigate to the project directory:
    ```
    cd blog-site-react
    ```

3. Install the necessary dependencies:
   ```
    npm install
   ```

4. Do the `backend` setup as described in the next section.

5. Start the development server from the root directory:
    ```
    npm start
    ```

## Backend Setup

The backend is set up in the `server` directory, utilizing Mongoose for database interactions and Express as the server framework.

1. Ensure you have `Node.js` and `npm` installed on your system. `MongoDB` should also be installed and running if you're using a local database.

2. Navigate to the `server` directory within the project:
    ```
    cd server
    ```

3. Install the required backend dependencies:
    ```
    npm install
    ```

4. Create a `.env` file in the server directory and add the following variables:
   - `PORT`: The port number your server will listen on (e.g., 5000).
   - `DATABASE_URL`: Your MongoDB connection URI. Example: `mongodb://localhost:27017/blogDatabase`

5. Run the Node server with:
    ```
    node server.js
    ```

6. To interact with the backend directly, use Postman or a similar tool. For `POST` requests, ensure the body is set to `raw` and `JSON`, with data formatted as follows:
    ```json
    {
      "title": "Sample Title",
      "description": "This is a sample blog post.",
      "imageURL": "http://example.com/image.jpg"
    }
    ```

7. In a new terminal window, navigate to the root directory of the project to start the React app:
    ```
    npm start
    ```

You can now add and view blog posts as you wish. For testing, feel free to use the React app to add more blog posts.

## Deployment

For information on deploying the app, refer to the [Create React App deployment documentation](https://create-react-app.dev/docs/deployment/#github-pages).

## Contributing

Contributions to improve the project are welcome.

## Project Link

[GitHub Project](https://github.com/singhkailash9/blog-site-react)

For the `frontend part` hosted at github pages go to the [link](https://singhkailash9.github.io/blog-site-react).

Note: The `backend` is developed locally using express and mongoose and is not hosted on GitHub Pages.