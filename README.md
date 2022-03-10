# MERN Boilerplate

## About

Sets up a basic MERN stack app with a few scripts etc set up.

## Steps to set up for project

1. Clone the repo
2. npm install client and server dependencies
3. remove the 'TEMPLATE' part of .envTEMPLATE and put in your Mongo URI, whether this be local or hosted
4. `npm run dev` anywhere in project to start client and server

## Available Scripts

In this project you can use the following scripts:

### Frontend (in client folder)

##### `npm start` (in client folder) - runs tbe frontend alone on localhost:3000, will update automatically on file changes.

##### `npm test` - runs the react testing library interactive UI, type 'a' to run all RTL tests. See [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run cypress` - runs the cypress testing app, see [cypress](https://www.cypress.io/) for more information.

### Backend (in server folder)

##### `npm run dev` - runs the frontend on localhost:300 and the backend on localhost:4000, both update automatically when you make changes to the files.

##### `npm start` - runs tbe backend alone on localhost:4000, will update automatically on file changes.

##### `npm test` - runs the backend mocha tests.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
