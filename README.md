
# MongoDB CRUD Operations with Node.js, Express, and Postman

This project demonstrates how to perform basic CRUD (Create, Read, Update, Delete) operations using **MongoDB**, **Node.js**, and **Express.js**. You can interact with the API using **Postman**.

## Table of Contents

- [Project Setup](#project-setup)
- [Technology Stack](#technology-stack)
- [API Endpoints](#api-endpoints)
  - [Create Bear](#create-bear)
  - [Get All Bears](#get-all-bears)
  - [Get Bear by ID](#get-bear-by-id)
  - [Delete Bear by ID](#delete-bear-by-id)
  - [Update Bear by ID](#update-bear-by-id)
- [Testing with Postman](#testing-with-postman)
- [License](#license)

## Project Setup

### Prerequisites

To run this project locally, you need the following tools installed:

- **Node.js** and **npm**: Node.js runtime and package manager.
- **MongoDB**: A local MongoDB instance or MongoDB Atlas (cloud database).
- **Postman**: To test the API endpoints.

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mongo-crud-node-express.git
   ```

2. Install dependencies:

   Navigate to the project folder and run:

   ```bash
   npm install
   ```

3. Set up MongoDB:

   - If you're using **MongoDB Atlas** (cloud database), create a MongoDB Atlas cluster and get the connection string.
   - If you're running **MongoDB locally**, ensure that MongoDB is running on your machine.

4. Configure the database connection:

   Edit the `index.js` or create a `.env` file to store your MongoDB connection URI. If you're using MongoDB locally, it may look like this:

   ```js
   const mongoose = require('mongoose');

   mongoose.connect('mongodb://localhost:27017/bearsdb', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   })
     .then(() => console.log('Connected to MongoDB'))
     .catch(err => console.log(err));
   ```

5. Run the server:

   ```bash
   npm start
   ```

   This will start the server on port `3000` by default. You should see a message like:

   ```
   Server running on port 3000
   ```

## Technology Stack

- **Node.js**: JavaScript runtime for the backend.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: MongoDB object modeling library for Node.js.
- **Postman**: API client for testing the API endpoints.

## API Endpoints

### 1. **Create Bear**

- **URL**: `/create-bear`
- **Method**: `POST`
- **Request Body** (JSON):
  
  ```json
  {
    "species": "Grizzly Bear",
    "latinName": "Ursus arctos horribilis"
  }
  ```

- **Response** (Success - 201 Created):
  
  ```json
  {
    "_id": "63b6e6d2d7f95d0ba5c78c32",
    "species": "Grizzly Bear",
    "latinName": "Ursus arctos horribilis",
    "createdOn": "2024-01-01T00:00:00.000Z"
  }
  ```

### 2. **Get All Bears**

- **URL**: `/bears`
- **Method**: `GET`
- **Response** (Success - 200 OK):
  
  ```json
  [
    {
      "_id": "63b6e6d2d7f95d0ba5c78c32",
      "species": "Grizzly Bear",
      "latinName": "Ursus arctos horribilis",
      "createdOn": "2024-01-01T00:00:00.000Z"
    },
    {
      "_id": "63b6e7d2d7f95d0ba5c78c33",
      "species": "Black Bear",
      "latinName": "Ursus americanus",
      "createdOn": "2024-01-01T00:00:00.000Z"
    }
  ]
  ```

### 3. **Get Bear by ID**

- **URL**: `/bear/:id`
- **Method**: `GET`
- **Parameters**:
  - `id`: MongoDB ObjectId of the bear (e.g., `63b6e6d2d7f95d0ba5c78c32`).
  
- **Response** (Success - 200 OK):
  
  ```json
  {
    "_id": "63b6e6d2d7f95d0ba5c78c32",
    "species": "Grizzly Bear",
    "latinName": "Ursus arctos horribilis",
    "createdOn": "2024-01-01T00:00:00.000Z"
  }
  ```

### 4. **Delete Bear by ID**

- **URL**: `/bear/:id`
- **Method**: `DELETE`
- **Parameters**:
  - `id`: MongoDB ObjectId of the bear (e.g., `63b6e6d2d7f95d0ba5c78c32`).
  
- **Response** (Success - 200 OK):
  
  ```json
  {
    "_id": "63b6e6d2d7f95d0ba5c78c32",
    "species": "Grizzly Bear",
    "latinName": "Ursus arctos horribilis",
    "createdOn": "2024-01-01T00:00:00.000Z"
  }
  ```

### 5. **Update Bear by ID**

- **URL**: `/bear/:id`
- **Method**: `PUT`
- **Parameters**:
  - `id`: MongoDB ObjectId of the bear (e.g., `63b6e6d2d7f95d0ba5c78c32`).
  
- **Request Body** (JSON):
  
  ```json
  {
    "species": "Grizzly Bear",
    "latinName": "Ursus horribilis"
  }
  ```

- **Response** (Success - 202 Accepted):
  
  ```json
  {
    "_id": "63b6e6d2d7f95d0ba5c78c32",
    "species": "Grizzly Bear",
    "latinName": "Ursus horribilis",
    "createdOn": "2024-01-01T00:00:00.000Z"
  }
  ```

## Testing with Postman

You can use **Postman** to test the above API endpoints. Follow these steps:

1. Open **Postman**.
2. Set the **Request Type** (GET, POST, PUT, DELETE) and the **URL** to the relevant API endpoint.
3. Add necessary **parameters** or **body data** (in JSON format) for the request.
4. Click on **Send** to make the request and view the response.

### Example for Create Bear (POST request):

- **URL**: `http://localhost:3000/create-bear`
- **Method**: `POST`
- **Body** (Raw, JSON):
  
  ```json
  {
    "species": "Grizzly Bear",
    "latinName": "Ursus arctos horribilis"
  }
  ```

### Example for Get All Bears (GET request):

- **URL**: `http://localhost:3000/bears`
- **Method**: `GET`

Click on **Send**, and you should see a response containing all bear entries from the database.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
