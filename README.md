
# Rooming List Bookings APP

This is a fullstack app to retrieve a collection of bookings sent to a hotel to obtain confirmation for the requested booking.
Is made with Nextjs in the frontend an Nestjs for the backend. Using PostgreSQL as a database and using TypeORM as ORM.

For running this app you must have installed:
1. Node.js (LTS 20+)
2. PostgreSQL
3. Chrome Extension: Allow CORS: Access-Control-Allow-Origin


## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)


## Technologies Used

- [ NEXT JS ](https://nextjs.org/docs)
- [ NEST JS ](https://nestjs.com/)
- [ TYPESCRIPT ](https://www.typescriptlang.org/)
- [ POSTGRESQL ](https://www.postgresql.org/docs/)
- [ TYPE ORM ](https://typeorm.io/)
- [ MATERIAL UI ](https://redis.io/es/)
- [ DOCKER ](https://www.docker.com/)

## Installation

### Backend
1. Create Database: 
   open pgAdmin
   create a database in pgAdmin under the name of: db-bookings 

2. Create Tables and populate: 
   open a Query Tool in db-bookings
   run the SQL query which is at root/api/database/tables.sql
   it will create the tables and populate them

3. Install dependencies backend:
   standing at root/api
   run "npm install" and install all the dependencies

4. Init backend app:
   run "npm run start:dev"
   backend will run on port 3002

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

## Resources

- Principles of atomic design: https://medium.com/galaxy-ux-studio/principles-of-atomic-design-7b03a30c3cb6


## Routes

### Frontend
- {/}: Rooming List 


### Backend
- {/ , GET}: Hello World

- {/booking , GET}: Get All Bookings
- {/booking , POST}: Upload multiple Bookings

- {/booking , GET}: Get All Rooming List
- {/booking , POST}: Upload multiple Rooming List

- {/rooming-list-booking , POST}: Upload multiple Rooming List Bookings
- {/rooming-list-booking/delete-all , DELETE}: Deletes all the data of that table and associated data, so it deletes the 3 tables data
