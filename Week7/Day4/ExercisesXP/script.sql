-- 🌟 Exercise 1: DVD Rental
-- Instructions
-- Get a list of all the languages, from the language table.
-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.
-- Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
SELECT
  *
FROM
  language;

SELECT
  f.title,
  f.description,
  l.name
FROM
  film f
  JOIN language l ON f.language_id = l.language_id;

SELECT
  f.title,
  f.description,
  l.name
FROM
  film f
  RIGHT JOIN language l ON f.language_id = l.language_id;

CREATE TABLE
  new_film (id serial PRIMARY key, name VARCHAR(255));

INSERT INTO
  new_film (name)
VALUES
  ('The Matrix');

INSERT INTO
  new_film (name)
VALUES
  ('The Matrix Reloaded');

CREATE TABLE
  customer_review (
    review_id serial PRIMARY key,
    film_id INT REFERENCES new_film (id) ON DELETE cascade,
    language_id INT REFERENCES LANGUAGE (language_id),
    title VARCHAR(255),
    score INT,
    review_text text,
    last_update TIMESTAMP
  );

INSERT INTO
  customer_review (
    film_id,
    language_id,
    title,
    score,
    review_text,
    last_update
  )
VALUES
  (
    1,
    1,
    'Great movie',
    10,
    'This movie is amazing!',
    NOW ()
  ),
  (
    2,
    1,
    'Awful movie',
    1,
    'This movie sucks!',
    NOW ()
  );

DELETE FROM new_film
WHERE
  id = 1;

-- The review from the customer_review table is also deleted because of the ON
-- DELETE cascade constraint


-- 🌟 Exercise 2 : DVD Rental
-- Instructions
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.

UPDATE
  film
SET
  language_id = 1
WHERE
  film_id IN (1, 2, 3);

-- The foreign keys defined for the customer table are:
-- - address_id
-- The foreign keys affect the way we INSERT into the customer table because we
-- need to make sure that the values we insert into address_id are valid values 
-- that exist in the address table.

DROP TABLE customer_review;
-- Dropping the table is an easy step because we only need to run the DROP TABLE

SELECT
  COUNT(*)
FROM
  rental
WHERE
  return_date IS NULL;

SELECT 
  f.title,
  f.rental_rate
FROM
  film f
  JOIN inventory i ON f.film_id = i.film_id
  JOIN rental r ON i.inventory_id = r.inventory_id
WHERE
  r.return_date IS NULL
ORDER BY
  f.rental_rate DESC
LIMIT 30;

SELECT
  f.title
FROM
  film f
  JOIN film_actor fa ON f.film_id = fa.film_id
  JOIN actor a ON fa.actor_id = a.actor_id
WHERE
  a.first_name = 'Penelope'
  AND a.last_name = 'Monroe'
  AND f.description LIKE '%Sumo%';

SELECT
  f.title 
FROM
  film f
WHERE
  f.length < 60
  AND f.rating = 'R';

SELECT
  f.title
FROM
  film f
  JOIN inventory i ON f.film_id = i.film_id
  JOIN rental r ON i.inventory_id = r.inventory_id
  JOIN customer c ON r.customer_id = c.customer_id
WHERE
  c.first_name = 'Matthew'
  AND c.last_name = 'Mahan'
  AND f.rental_rate > 4
  AND r.rental_date BETWEEN '2005-07-28' AND '2005-08-01';

SELECT
  f.title
FROM
  film f
  JOIN inventory i ON f.film_id = i.film_id
  JOIN rental r ON i.inventory_id = r.inventory_id
  JOIN customer c ON r.customer_id = c.customer_id
WHERE
  c.first_name = 'Matthew'
  AND c.last_name = 'Mahan'
  AND (f.title LIKE '%Boat%' OR f.description LIKE '%Boat%')
  ORDER BY f.replacement_cost DESC
  LIMIT 1;
