# Student-api
> A list of APIs to update, get and create students with basic authentication.

![Language](https://img.shields.io/badge/node-%3E%3D%206.0.0-brightgreen)
![Platform](https://img.shields.io/badge/npm-v7.0.0-blue)

## Version

1.0

## Requirements

- Node.js 8.0.0+
- Postman
- MongoDB Compass
- IDE of your choice

## Getting Started

1. Download the project by cloning this repository on CMD or by downloading the Zip file.
2. Add the .env file that is attached in the email to the main folder.
3. Import the postman collection and environment files in Postman.
4. Open a terminal and navigate to the project.
5. Run `npm install` to install the dependencies.
6. Run `npm run server`.
7. Run `npm run data:import` at any time to delete all tests and restore the sample data in the DB.

## NPMs used

```ruby
npm 'dotenv'
npm 'express'
npm 'express-async-handler'
npm 'mongoose'
npm 'morgan'
npm 'nodemon'
```

## Summary

This app contains 3 APIs to create, edit and fetch a student.
It contains sample data to get started and middlewares to handle errors and authentication.
The APIs are shared in postman and can be easily imported in the mentioned program.

### API Endpoints: 

- POST http://localhost:5000/api/students/create
- GET http://localhost:5000/api/students/:id
- PUT http://localhost:5000/api/students/:id

### Node.js Life Cycle: 
- The view controller accepts a user event, constructs a request object, and send it to the route.
- The route does some work with the request and routes it to the main server.
- The main server formats the data in the response and constructs a JSON object and sends it to the client.

## Features

- [x] Basic Authentication
- [x] Reusable Controllers
- [x] Middlewares
- [x] Sample Data
- [x] Error Handling
- [x] ES6 Modules
