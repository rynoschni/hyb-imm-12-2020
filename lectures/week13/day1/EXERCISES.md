# The Cat Reducers

The goal of these exercises is to get more comfortable with dispatching actions and writing reducers that calculate new state.
<!--
## Exercise 1

Starting with the following state:

```js
{
  activity: 'napping'
}
```

Write a reducer that responds to the following actions:

* `ACTION_NAP`
* `ACTION_EAT`
* `ACTION_PLAY`

Along with the reducer, make sure that you have action creators and a redux store.

You'll dispatch the actions one at a time.

## Exercise 2

This is a variation on exercise #1, but it requires you to create actions that have payloads.

Your initial state has the following:

```js
{
  name: 'Guster',
  activity: 'blep'
}
```

Write a reducer that responds to the following actions:

* `ACTION_SET_NAME`
* `ACTION_SET_ACTIVITY`

Modify your action creators and reducer so that you can modify _two_ pieces of state based on the information in the `action.payload`.

## Exercise 3

### The "So Many Cats!" Reducer

Your initial state is:

```js
  cats: {
    1001: {
      name: 'Beans',
      activity: 'meowing',
    },
    1002: {
      name: 'Bandit',
      activity: 'eating',
    },
  },
```

Your reducer will respond to the following actions:

* `ACTION_SET_NAME`
* `ACTION_SET_ACTIVITY`
* `ACTION_ADD_CAT`

Modify the action creators and reducers so that you can update an existing cat by their id, and you can add a new cat. In both cases, you'll need to identify the cat by their id in the action.payload.

#### NOTE

When you create a cat, generate a new id. Think in terms of something like this:
`const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);` -->