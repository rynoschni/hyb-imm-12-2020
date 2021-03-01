# Exercises

## Learning Portal Exercise

* [AJAX with React (Learning Portal)](https://learn.digitalcrafts.com/immersive/lessons/full-stack-frameworks/ajax-with-react/#learning-objectives)

---

## Github Issues List

API Link: [https://api.github.com/repos/facebook/create-react-app/issues](https://api.github.com/repos/facebook/create-react-app/issues)

## Assignment

* Use the Github Issues API to make a page that looks similar to this: [https://github.com/facebookincubator/create-react-app/issues](https://github.com/facebookincubator/create-react-app/issues)
* Focus just the list of issues, ignore the search/filter/etc..

## App Structure

* Scaffold the app with `create-react-app`
* Remove the default information from App.js
* Leave App.js as a `FUNCTIONAL` component
* Create a `CLASS` based component called `IssueList`
  * This component will hold the array of issues from the API
  * The issues will be stored in the component's `STATE`
  * This component will pass data for each issue as a `PROP` into a child component
* Create a `FUNCTIONAL` component called `Issue`
  * This is the child component of `IssueList`
  * It will receive issue data as a `PROP`
  * This component will render the issue data 
  * The component should show the issue title, URL (as a link!), and body

---

## Github User Profile

For this exercise you'll query the Github Users API for profile information on a specific user.

The Github API URL is (replace `[username]` with an actual username): `https://api.github.com/users/[your github username]`

## Getting Started

* Run `npx create-react-app github-users-query`
* Remove all the default information from `App.js` (you'll replace it with new components)
* Create a folder called `components`
  * `SearchForm` - This is the _default_ component. It's a Class based component that loads a search form and maintains `state`
  * `UserCardList` - Accepts an array of user data as a PROP
  * `UserCard` - Accepts a single user's information as a PROP

## Next Steps

### Search Form

`SearchForm.jsx`

* Create a form in this component
  * The form will need a text `input` and a submit `button`
  * We'll eventually make this form active (that's __Part 2__).
* Initial state for `SearchForm.jsx` should contain:
  * The value of the user name being searched.<br/>i.e. `username`. <br/>The default value will be your Github Username!
  * An array of user data (_we'll eventually request more than one user!_)<br/>i.e. `users`
* Set the value of the text `input` equal to `this.state.username`.  <br/>i.e. `<input type="text" value={this.state.username}>`

### Notes

* Other than the `render()` method, you will not _need_ any other lifecycle methods.
* You're free to add lifecycle methods if you'd like (i.e. to start with at least one user being shown)

### Search Form Functions (there will be more of these!)

Add a click handler function (you can call it `handleSubmit` or `handleClick`):

* Take the username value from `state` and make a `fetch()` request to the Github API
* The response from the API will be a _single user_.
* That response will need to be added to the existing array of users in state.
* _HINT:_ The spread operator will come in handy here, eg: `[...this.state.users, newUserData]`

### UserCardList and UserCard Components

`UserCardList` (Functional Component)

* This component takes the array of users (from `SearchForm`) as a prop (_it will be a single user to start!_)
* `map` through this list, passing a user's information into the `UserCard` component

`UserCard` (Functional Component)

* This component takes a user objects as a prop (from `UserCardList`)
* Render whatever data you'd like from a user's profile.
  * _NOTE_: Not all users have all their information filled out!
  * I'd recommend starting with the user's `avatar_url`, since almost every user has some sort of avatar image.

`UserCardList` and `UserCard` are are similar to the Random User exercise!
