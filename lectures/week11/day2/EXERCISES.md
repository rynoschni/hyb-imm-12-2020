# Redux Exercises - No React

We're going to practice using Redux without loading in the entire React ecosystem.

## Exercise 1

* [Redux Banking Application - Digital Crafts Learning Portal](https://learn.digitalcrafts.com/immersive/lessons/full-stack-frameworks/intro-to-redux/#the-redux-banking-application)
* [Sean's Solution on Github](https://github.com/seanrreid/redux_banking_exercise)

## Exercise 2

* [State, Actions, and Reducers - Digital Crafts Learning Portal](https://learn.digitalcrafts.com/immersive/lessons/full-stack-frameworks/state-actions-reducers/#overview)

---

### Notes

Note that our in-class exercises are using Redux in vanilla JS, so we're not starting up React applications.
This is different than the examples in the Learning Portal.

To circumvent a complicated Webpack build, we can load Redux via its CDN inside of a regular HTML document.

* In our HTML load Redux and the `index.js` as follows:

```html
// Load Redux via CDN...
<script src="https://unpkg.com/redux@4.0.5/dist/redux.min.js"></script>
// Load all of our scripts...
<script src="index.js" type="module"></script>
```

_NOTE_: the `type="module` is necessary to properly load the `index.js` file!

* Inside of our `index.js` Redux, and its methods, should be referenced like this:

```js
const { createStore } = Redux;
```

* In order for Redux Dev Tools to load, be sure to create the `store` as follows:

```js
const store = createStore(
    reducerCallback,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```