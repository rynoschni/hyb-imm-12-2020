# Exercises

* [Sean's Solutions to the Apple CEO's frontend](https://github.com/seanrreid/apple_ceos_frontend_v_3_21)

## Create a REACT-O-BLOG!

* Your goal is to create a full-fledged PERN (PSQL, Express, React, Node) application, aka **React-O-Blog!**
* You'll write a backend, using Node, Express, and PostgreSQL to serve as an API.
* You'll write a frontend, in React.
* The React app will talk to the backend and render the data from the API.

Perhaps a diary of learning React/Redux?
> Day 14, I think the teacher has gone insane.  I have no idea what is going on, send help!

*NOTE*: You'll run the backend and frontend in _seperate_ folders/repos.

## Your Backend JSON API

* Create a Node + Express + PSQL app to store blog posts and comments
* Have the routes return JSON: `res.json([SOMEDATA]).status(200);`

### API Routes

* Route to serve up all _all_ entries
* Route to get a _single_ entry

## Your React Frontend

* Create a React App to load data from the API

### React Architecture

* A component to list _all_ entries
* A component to list a _single_ entry
* Routes to move between all entries and a single entry
