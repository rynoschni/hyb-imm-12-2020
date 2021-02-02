# Exercises

## Part 1

* Complete [SQLBolt `SELECT` Exercises, 1-4](https://sqlbolt.com/) up through _SQL Review: Simple SELECT Queries_.
* Complete [SQLBolt `INSERT` Exercise, 13](https://sqlbolt.com/lesson/inserting_rows)
* Complete [SQLBolt `CREATE TABLE` Exercise, 16](https://sqlbolt.com/lesson/creating_tables)
* Complete [SQLBolt `DROP TABLE` Exercise, 18](https://sqlbolt.com/lesson/dropping_tables)

## Part 2

* Complete [SQLBolt `JOIN` Exercises, 6-7](https://sqlbolt.com/lesson/select_queries_with_joins).

## Part 3

* Complete [SQLBolt `UPDATE` Exercise, 14](https://sqlbolt.com/lesson/updating_rows)
* Complete [SQLBolt `DELETE` Exercise, 15](https://sqlbolt.com/lesson/deleting_rows)

## Part 4

* Complete [SQLBolt `ALTER TABLE` Exercise, 17](https://sqlbolt.com/lesson/altering_tables)

---

## Class Survey v1

We're going to create an app to rank our understanding of the following topics:

* HTML
* CSS
* Javascript
* PostgreSQL
* Node
* Express

We'll rank our understanding of the topics using the following 5 point scale:

* Awesome, 5
* Great, 4
* Good, 3
* Okay, 2
* Poor, 1
* Unranked, 0

### The Assignment

#### Create a PSQL database with _two_ tables

* `topics` table with columns
  * `id`
  * `topic_name`
  * `topic_score` (this is a FOREIGN KEY value that points to the `ranking_scale` PRIMARY KEY)
* `ranking_scale` table with columns
  * `id` (This is the PRIMARY KEY, that points to `topics.topic_score`)
  * `ranking_title`
  * `ranking_value`

#### Create a Node + Express App

* Create the Express App
* Install `pg-promise` and `express-es6-template-engine`
* Create an index route that queries the database, aka `GET`, and returns the topics, and your score (1-5)
