# Exercises

## Pen and Paper Exercises

### Association Examples

* pets and owners
* blog posts and authors
* teachers and students
* parents and children
* classes and objects
* projects and contributors

#### Step 1

* Determine the above relationships are one to many or many to many. Always ask the question in both directions. Note if you need to clarify meaning of relationship.

#### Step 2

* Take just one of the above examples, draw out on paper some sample data.

#### Step 3

* Get a partner and explain your answers to each other. See how your answers differ and why.

---

## Data School Online Practice

* [Data School: Quick Introductory SQL Concepts](https://dataschool.com/learn-sql/introduction/) <br/> Start with the Introduction, and complete up through the `LIMIT` section.

---

## Apple CEOS Database

### Create an `apple_ceos_sql` folder

This folder will contain _two_ SQL files.

### Create a Schema File

Create a `schema.sql` file for an Apple CEO database. Include a `CREATE TABLE` statement to create a table called `apple_ceos`.

This table will contain the following information, you will use the appropriate data types to represent the info.
__Please use an auto-incrementing primary key `ID`__:

* Name
* Slug (lowercase version of the name without spaces)
* First Year Active

### Create a Seed File

Create a `seed.sql` file to populate the table. Include an `INSERT` statement to add one, or more, Apple CEOs with all the associated data.
