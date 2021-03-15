# Week 14 - Day 1

## Morning Walkthrough

* `POST`ing data from a React form to an Express API
* [Apple CEOs Class Walkthrough Solution](https://github.com/seanrreid/apple_ceos_frontend_v_3_21/tree/add-post-routes)

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

### Testing Requirement

* **REQUIRED**: Add a **COMPONENT** test
* **OPTIONAL**: Add a **FEATURE** test (aka "End-to-End").

⭐️⭐️⭐️ **NEW** ⭐️⭐️⭐️

* Add the ability to `POST` either an entry, or a comment!

i.e.

```jsx
fetch('http://127.0.0.1:3333/ceos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ some_value_on_your_API_that_should_be_expected: some_value_from_state_that_you_should_create })
}).then((response) => response);
```

### Bonus

* Authenticate a user.
  * **You do not need to include authentication, it's a bonus!**
  * _Seriously_, make this the _last_ thing you incoporate. Make the other parts work _first_, then retrofit this as a **BONUS**.
