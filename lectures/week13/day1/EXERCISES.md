# The Cat Reducers

The goal of these exercises is to get more comfortable with dispatching actions and writing reducers that calculate new state.

* [Sean's Solution on Github](https://github.com/seanrreid/cat-reducer-v_03_21)

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