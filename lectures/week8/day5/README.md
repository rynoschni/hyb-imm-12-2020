# Week 8 - Day 5

* Put all the peices together, M + V + C

## Fetching Third Party API Data in Node/Express

By default, Node does _not_ have access to any browser based APIs (i.e. `fetch`, `alert`, etc...).

However, there are third-party modules to help bring this functionality to Node. Two of the most common are:

* [Node Fetch](https://www.npmjs.com/package/node-fetch)
* [Node Axios](https://www.npmjs.com/package/axios)

## Handling CORS

Some APIs will _not_ talk to a client side API request. However, they _can_ talk to other servers. In Express you can install the `CORS` middleware to have your server send the proper information to an API.

Below are links to the documentation for the `CORS` middleware, and a walkthrough by Flavio Copes.

* [Express CORS middleware](https://expressjs.com/en/resources/middleware/cors.html)
* [Handling CORS in Express](https://flaviocopes.com/express-cors/)