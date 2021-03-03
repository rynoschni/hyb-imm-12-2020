# Exercises

## General Notes

* The `<Router>` and `<Switch>` components should be at the highest possible level.
* It's recommended to load this in your `App.js`, not _required_, but it's helpful to put them here.

---

## Github User Exercise, with Routes

### Step 1

* For each User, create a route that points to their profile, i.e. `http://localhost:3000/user/[username]`
* Create a `UserProfile` component that will render at this route.
* Load information specific to that user on this page (your choice what to display).

### Step 2

* Inside that route, query the user's repos and render a list of items with details for each repo.
* Use the following API (replace `[username]` with the user's Github username): `https://api.github.com/users/[username]/repos`

### The `SearchForm` Component

* It's recommended to load the user routes in this component, however it's not _required_.  This could also be acheived at the `App.js` level.

### The `UserList` Component

* This component has the array of users that have been searched for via the `SearchForm` component.
* This component will load the routes that point to the `UserProfile` component.

### The `UserProfile` Component

* This component will only load when you visit a specific route, i.e. `http://localhost:3000/user/[username]`
* This will be a **FUNCTIONAL** component.
* Pass the list of users from the `UserList` into this component via `props`
* Return a single user from the `users` array.
  * **HINT**: You'll want to use the the `find()` method to find the issue from the `users` array.
  * i.e. `const someVariableNameForSingleUserThatYouComeUpWith = users.find((someOtherSingleUserVariableNameThatYouDoNotCopyPasteFromMe) => return [do stuff to find a user via username])`

#### REMINDER

We used the `find()` method on our Apple CEOs assignment:

```js
const executive = ceosModel.find((executive) => {
    if (executive.slug === slug) {
        return executive;
    }
});
```

<!-- * Fetch the User's repo data via `https://api.github.com/users/[username]/repos` and render some of that data in the component (your choice what to display). -->
<!-- @TODO - Can't do the `fetch` until you've covered Hook, so add it later - SR -->

---

## Github Issues, with Routes

* Add React Router to our Github Issues List

### The `IssueList` Component

Refactor your `IssueList` component to render the Issue Title and a Link

* This component will still load an array of Issues from the Github API
* Add in some conditional rendering based on if the `issues` array is empty or not
* The link will point to `issue/:issue_number`, i.e. `localhost:3000/issue/1223`
* This link will point to a **nested route** to load the `Issue` component.

### The `Issue` component

* This will load the details of a particular issue, based on the issue number.
* It will receive the issue number via the `useParams()` Hook.
* The `issues` array will be passed in as a `prop`.
* Return a single issue, via the `issue_number`, from the `issues` array.
  * **HINT**: You'll want to use the the `find()` method to find the issue from the issues array.
  * i.e. `const someVariableNameForSingleIssueThatYouComeUpWith = issues.find((someOtherSingleIssueVariableNameThatYouDoNotCopyPasteFromMe) => return [do stuff to find an issue by its id])`
  * See the [REMINDER](#reminder) above ☝️

## Bonus

* Add React-Markdown
