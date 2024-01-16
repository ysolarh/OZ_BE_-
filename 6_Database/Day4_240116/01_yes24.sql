USE yes24;

CREATE TABLE Books (
    bookID INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255),
    publisher VARCHAR(255),
    publishing DATE,
    rating DECIMAL(3, 1),
    review INT,
    sales INT,
    price DECIMAL(10, 2),
    ranking INT,
    ranking_weeks INT
);


-- 기본 조회 및 필터링

SELECT title, author 
FROM books;

SELECT * 
FROM books 
WHERE rating >= 8.0;

SELECT title, review 
FROM books 
WHERE review >= 100 
ORDER BY review DESC;

SELECT title, price 
FROM books 
WHERE price < 20000;

SELECT * 
FROM books 
WHERE ranking_weeks >= 4 
ORDER BY ranking_weeks DESC;

SELECT * 
FROM books 
WHERE author = '자청 저';

SELECT * 
FROM books 
WHERE publisher = '웅진지식하우스'


-- 조인 및 관계

SELECT author, COUNT(*) AS books_count 
FROM books 
GROUP BY author 
ORDER BY books_count DESC;

SELECT publisher, COUNT(*) AS publishing_count 
FROM books 
GROUP BY publisher 
ORDER BY publishing_count DESC 
LIMIT 1;

SELECT author, AVG(rating) AS rating_avg 
FROM books 
GROUP BY author 
ORDER BY rating_avg DESC
LIMIT 1;

SELECT * 
FROM books 
WHERE ranking = 1;

SELECT title, sales, review 
FROM books 
ORDER BY sales DESC, review DESC 
LIMIT 10;

SELECT * 
FROM books 
ORDER BY publishing DESC 
LIMIT 5;


-- 집계 및 그룹화

SELECT author, AVG(rating) AS rating_avg 
FROM books 
GROUP BY author 
ORDER BY rating_avg DESC;

SELECT publishing, COUNT(*) 
FROM books 
GROUP BY publishing;

SELECT title, AVG(price) 
FROM books 
GROUP BY title;

SELECT * 
FROM books 
ORDER BY review DESC 
LIMIT 5;

SELECT ranking, AVG(review) 
FROM books 
GROUP BY ranking;


-- 서브쿼리 및 고급 기능

SELECT title, rating 
FROM books 
WHERE rating > (
	SELECT AVG(rating) 
	FROM books
) 
ORDER BY rating DESC;

SELECT title, price, publisher 
FROM books 
WHERE price > (
	SELECT AVG(price) 
	FROM books
);

SELECT title, review 
FROM books 
WHERE review > (
	SELECT MAX(review) 
	FROM books
);

SELECT title, sales 
FROM books 
WHERE sales < (
	SELECT AVG(sales) 
	FROM books
);

SELECT author, title 
FROM books 
WHERE author = (
	SELECT author 
	FROM books 
	GROUP BY author 
	ORDER BY COUNT(*) DESC 
	LIMIT 1);


-- 데이터 수정 및 관리

UPDATE books 
SET price = 9999 
WHERE title = "한국사";

UPDATE books 
SET title = '제목업데이트' 
WHERE author = '최태성 저';

DELETE FROM books 
WHERE sales = (
	SELECT sales
	FROM (
		SELECT MIN(sales)
		FROM books
	) as t
);

UPDATE books 
SET rating = rating + 1 
WHERE publisher = '웅진하우스';


-- 데이터 분석 예제

SELECT author, AVG(rating), AVG(sales) 
FROM books 
GROUP BY author 
ORDER BY AVG(rating) DESC, AVG(sales) DESC;

SELECT publishing, AVG(price) 
FROM books 
GROUP BY publishing 
ORDER BY publishing ASC;

SELECT publisher, COUNT(*) AS book_count, SUM(review) AS review_sum 
FROM books 
GROUP BY publisher 
ORDER BY book_count DESC;

SELECT ranking, AVG(sales) 
FROM books 
GROUP BY ranking;

SELECT price, AVG(review), AVG(rating) 
FROM books 
GROUP BY price;


-- 난이도 있는 문제

SELECT publisher, author, AVG(sales) as avg_sales 
FROM books 
GROUP BY publisher, author 
ORDER BY publisher, avg_sales DESC;

SELECT title, review, price 
FROM books 
WHERE review > (
	SELECT AVG(review) 
	FROM books
) AND price < (
	SELECT AVG(price) 
	FROM books
);

SELECT author, COUNT(DISTINCT title) as num_books 
FROM books 
GROUP BY author 
ORDER BY num_books DESC 
LIMIT 1;

SELECT author, MAX(sales) AS max_sales 
FROM books 
GROUP BY author;

SELECT MONTH(publishing) AS month, COUNT(*) as num_books, AVG(price) AS avg_price 
FROM books 
GROUP BY month;

SELECT publisher, COUNT(*), MAX(rating) - MIN(rating) AS rating_difference 
FROM books 
GROUP BY publisher 
HAVING COUNT(*) >= 2 
ORDER BY rating_difference DESC 
LIMIT 1;

SELECT title, sales, rating / sales AS ratio 
FROM books 
WHERE author = '특정 저자'
ORDER BY ratio DESC
LIMIT 1;

