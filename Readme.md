# E-commerce Backend

This is a backend for an e-commerce platform built with Node.js, TypeScript, and MongoDB. It allows users to manage products, add items to their cart, place orders, and more. This backend is designed to provide core e-commerce functionalities including user authentication, product management, cart management, and order processing.

## Features

- **Authentication**: Users can sign up, sign in, and authenticate with secure JWT tokens.
- **Product Management**: Admins can add, update, and delete products.
- **Cart Management**: Users can add products to their cart, update the quantity, and view the cart details.
- **Order Management**: Users can place orders from their cart and view their order history.
  
## Technologies

- **Node.js** - JavaScript runtime for building the server
- **Express.js** - Web framework for handling HTTP requests
- **MongoDB** - NoSQL database to store user data, product information, and orders
- **Mongoose** - ODM (Object Data Modeling) library for MongoDB in Node.js
- **JWT (JSON Web Tokens)** - For secure authentication
- **TypeScript** - Type-safe JavaScript for better maintainability
- **Bcryptjs** - For hashing passwords
- **Swagger** - API documentation

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-backend.git
   cd ecommerce-backend
   ```

2. Install the dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env` file at the root of the project and add the following environment variables:
   ```
   MONGO_URI=mongodb://yourMongoDBConnectionURI
   JWT_SECRET=yourJWTSecretKey
   PORT=5000
   ```

4. Run the development server:
   ```bash
   pnpm dev
   ```

   The server will start on port `5000` by default.

## API Endpoints

### Authentication

- **POST /signup**: Register a new user.
- **POST /signin**: Log in with email and password.

### Product Management (Admin)

- **POST /addproduct**: Add a new product.
- **PUT /updateproduct/:productId**: Update a product's details.
- **DELETE /deleteproduct/:productId**: Delete a product.

### Cart Management

- **POST /cart/add**: Add a product to the cart.
- **POST /cart/update**: Update the quantity of a product in the cart.
- **POST /cart/delete**: Remove a product from the cart.
- **GET /cart**: Get the current user's cart details.

### Order Management

- **POST /placeorder**: Place an order from the cart.
- **GET /orders/customer/:customerId**: Get all orders for a specific customer.

## Database Structure

### User Collection (`User`)

- `name`: String
- `email`: String (unique)
- `password`: String (hashed)
- `address`: String (optional)

### Product Collection (`Product`)

- `name`: String
- `description`: String
- `price`: Number
- `category`: String

### Cart Collection (`Cart`)

- `userId`: ObjectId (references the `User` collection)
- `items`: Array of cart items, each containing:
  - `productId`: ObjectId (references the `Product` collection)
  - `quantity`: Number

### Order Collection (`Order`)

- `userId`: ObjectId (references the `User` collection)
- `items`: Array of order items, each containing:
  - `productId`: ObjectId (references the `Product` collection)
  - `quantity`: Number
- `total`: Number
- `address`: String
- `status`: String (default: 'Pending')

## API Documentation

The API is documented using Swagger. Once the server is running, you can access the Swagger UI at:

```
http://localhost:5000/api-docs
```

This will allow you to explore all available endpoints and interact with the API directly.

## Testing

You can test the API using tools like **Postman** or **Insomnia**. The endpoints are designed to follow RESTful conventions, and the API responses are in JSON format.

---