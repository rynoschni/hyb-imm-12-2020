# Exercises

## A Long Time Ago, in a Galaxy Far Far Away...

### Do, you must

* Use a lifecycle method to fetch data in a parent component.
* Use React Router to navigate the site.
* Apply Styled-Components to the layout.

### Choices, you have

* Keep the navigation on the screen, or hide it when a user browses to a character profile page.
* What kind of styles you want to use (and if you want to incorporate a library _with_ Styled Components)

### NOTE

* The [React Router Lesson](https://learn.digitalcrafts.com/immersive/lessons/full-stack-frameworks/react-router/#blog-posts-list-and-detail) from the Learning Portal will be helpful here!

## Getting Started

* Run `npx create-react-app react-swapi-exercises`
* Remove all the default information from `App.js` (you'll replace it with new components)
* Create a folder called `components`
* In that folder create:
  * `CharacterList` - Accepts an array of user data as a PROP
  * `CharacterProfile` - Accepts a single user's information as a PROP

## The `App.js` Component

### Main Structure

* Refactor `App.js` into **CLASS** component. You will need `state` and lifecycle methods.
* Initialize an empty `state` with the following value: `characters: []`
* Make a `fetch` request to `https://swapi.dev/api/people/`
  * REMINDER: `componentDidMount()` is where you make `fetch` requests
* Save the response in the `state` updating the `characters` array.

### Routes

* This component should load _all_ the routes.

#### Default Route

* The default (or "root" route) will show a message telling the user to select a character from the list.
* This component will conditionally render the `CharacterList` component.
  * You will determine if this list is always visible, or only visible in the default route.

#### Character Profile Route

* There will be a route to each character profile that renders the `CharacterProfile` component.
  * i.e. `path="/character/:id"`

## The `CharacterList` Component

* This is a **FUNCTIONAL** component that accepts `props`.
* This component has the array of characters that have been loaded in `App`, passed via `props`.
* This component will _conditionally render_ based on whether or not you have data in the `characters` array.
* Use the `map()` method to create a list showing the character names.
* For each character, create a `Link` that will point to their profile.
* The links will represent each characters location in the array.
  * i.e. `http://localhost:3000/character/[INDEX]`
  * See the [Note](#note) above for a link to a previous example of this

## The `CharacterProfile` Component

* This component will only load when you visit a specific route, i.e. `http://localhost:3000/character/0`
* This will be a **FUNCTIONAL** component.
* Pass the list of characters from the `CharacterList` into this component via `props`
* Return a character's profile from the `characters` array.
* Render the character details, you decide which ones, based on what is available.

### REMINDER

We used the `id` in the [React Router Exercise](https://learn.digitalcrafts.com/immersive/lessons/full-stack-frameworks/react-router/#blog-posts-list-and-detail) to get a specific blog post.

```js
    // Use the id to get a specific post from the Array.
    const post = props.posts[id];
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </article>

    );
```

We'll do the same here for the character from the array!
!
