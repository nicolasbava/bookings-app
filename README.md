
# 🏨 Rooming List Bookings APP

This is a fullstack app to retrieve a collection of Bookings sent to a hotel to obtain confirmation for the requested booking.
Is made with Nextjs in the frontend an Nestjs for the backend. Using PostgreSQL as a database and using TypeORM as ORM.


## Table of Contents

- [Technologies Used](#technologies-used)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Usage](#usage)


## Technologies Used

- [ NEXT JS ](https://nextjs.org/docs)
- [ NEST JS ](https://nestjs.com/)
- [ TYPESCRIPT ](https://www.typescriptlang.org/)
- [ POSTGRESQL ](https://www.postgresql.org/docs/)
- [ TYPE ORM ](https://typeorm.io/)
- [ MATERIAL UI ](https://redis.io/es/)
- [ DOCKER ](https://docs.docker.com/)


## 🚀 Quick Start (Using Docker)

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed.

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/nicolasbava/bookings-app
   cd bookings-app

2. **Start the App with Docker**:
   docker-compose up --build

3. **Access the App**:
   Frontend: http://localhost:3000
   Backend API: http://localhost:3001

4. **Shutdown App**
   run: "docker-compose down" to shut down the app

## 🔐 JWT Authentication

The backend is protected with JWT authentication. To access protected routes from the frontend, you need a valid token.

### 1. Generate a Token

You can generate a valid JWT token using [https://jwt.io](https://jwt.io):

1. Go to jwt.io
2. Add the secret "mysecret"
3. Add the payload to generate the token:
   {
      "sub": "1",
      "username": "nicolas",
      "iat": <iat-number>
   }

   The algorithm I am using is:
   {
      "alg": "HS256",
      "typ": "JWT"
   }

4. Then add the secret to /frontend/.env.local at NEXT_PUBLIC_JWT_TOKEN


## Installation (for local development)

### Backend
1. Create Database: 
   open pgAdmin
   create a database in pgAdmin under the name of: db-bookings 

2. Create Tables and populate: 
   open a Query Tool in db-bookings
   run the SQL query which is at root/api/database/tables.sql
   it will create the tables
   populate the tables from the frontend, from the button "Insert Bookings and Rooming Lists"

3. Install dependencies backend:
   standing at root/api
   run "npm install" and install all the dependencies

4. Environment Variables:   
   create an .env file like root/backend/.env
   there is an example of .env in .env.example 

4. Init backend app:
   run "npm run start:dev"
   backend will run on port 3001

### Frontend
1. Open console at location: 
   open a console at root/frontend

2. Install dependencies:
   standing at root/frontend
   run "npm install" and install all the dependencies

3. Run the APP
   in root of the project run "npm run dev"
   it will run on port 3000

## Usage
### Backend
1. Init backend app:
   run "npm run start:dev"

2. Run frontend

### Frontend
1. Init frontend app:
   run "npm run dev"

2. Open the browser at http://localhost:3000/

3. Load data from the button, which data is in JSON format at /api/JSONData

## Resources

- Principles of atomic design: https://medium.com/galaxy-ux-studio/principles-of-atomic-design-7b03a30c3cb6


## Routes

### Frontend
- {/}: Rooming List 


### Backend
- {/ , GET}: Hello World

- {/booking , GET}: Get All Bookings
- {/booking , POST}: Upload multiple Bookings

- {/rooming-list , GET}: Get All Rooming List with Booking associations 
- {/rooming-list , POST}: Upload multiple Rooming List

- {/rooming-list-booking/:roomingListId , GET}: Get all Bookings associated to a roomingListId
- {/rooming-list-booking/, POST}: Upload multiple Rooming List Bookings
- {/rooming-list-booking/delete-all , DELETE}: Deletes all the data of that table and associated data, so it deletes the data from the 3 tables


## Tests

### Backend
1. Integration Tests: 
   step into root/api
   run "npm run test:e2e"

