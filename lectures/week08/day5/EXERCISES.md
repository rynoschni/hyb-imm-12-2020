# Create A Book Review site/Blog

Create either a Book Review site or a Blog, or combine both?  Your choice.

---

## Database

### Suggested Book Review Tables

* Users
* Books
* Reviews

### Suggested Blog Tables

* Users
* Posts
* Comments

#### ALL tables will need the following...

CREATE A `SCHEMA.SQL` FILE!

* What tables do I need?
* What goes in those tables?
* What are the relationships??

CREATE A `SEED.SQL` FILE!

* Save some sample data...

## Node + Express

* `pg-promise` - This talks to squirrels (j/k, it talks to Postgres)
* `express-es6-template-engine` Template - Creates our views

---

## App Structure (10,000 ft view)

### Books Review App

* BOOKS -> have data -> saved in PSQL
* BOOK -> Single entry -> from PSQL -> Can have a review
* REVIEWS -> Have data, that is linked to BOOKS and USERS -> saved in PSQL

### Blog App

* BLOG -> have posts -> saved in PSQL
* POST -> Single Entry -> from PSQL -> Can have comments
* COMMENTS -> Have data, that is linked to POSTS -> saved in PSQL

---

## App Flow (Suggested)

### Books

* HOMEPAGE
  * localhost:3000
* BOOKS ROUTE -> Plural -> Singular
  * `GET` localhost:3000/books
  * `GET` localhost:3000/books/:books_id
* BOOKS (singular) -> Details -> Read Reviews/Add Review

### Blog

* HOMEPAGE
  * localhost:3000
* BLOG ROUTE -> Plural -> Singular
  * `GET` localhost:3000/blog
  * `GET` localhost:3000/blog/:post_id
* POST (singular) -> Details -> Read/Add Comments


## February 5th Bonus Challenge

* Using `node-fetch` or `axios`, can you included any third-party data in your application?