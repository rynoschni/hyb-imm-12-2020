# Start Adding Users

## Step 1

* Create two partials in your `templates/partials` folder
  * `signup.html`
  * `login.html`

### Signup Partial

Create a form with the following items

* ACTION -> `/users/signup`
* METHOD -> `POST`
* Inputs
  * First Name -> text input
  * Last Name -> text input
  * Email -> text input
  * Password -> password input
* "REGISTER" button

### Login Partial

Create a form with the following items

* ACTION -> `/users/login`
* METHOD -> `POST`
* Inputs
  * Email -> text input
  * Password -> password input
* "LOGIN" button

## Step 2

## User Routes

Create a `users` route with the following methods

### GET routes - `router.get()`

* GET `/users/signup` -> renders `signup`
* GET `/users/login` -> renders `login`

### POST routes - `router.post()`

* POST `/users/signup` -> Handles signup form submissions
  * Expects first name, last name, email address, and password
* POST `/users/login` -> Handles login form submissions
  * Expects email address and password

## Step 3

Setup User Model (in class code along)

* Insure we have the proper database tables setup.
* `signup()` will be a STATIC method
* `login()` will be an INSTANCE method
