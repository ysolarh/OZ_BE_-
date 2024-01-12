USE classicmodels;

--기본 조회 및 필터링
--	고객 목록 조회
SELECT * FROM customers;

--	특정 제품 라인의 제품 조회
SELECT * FROM products
WHERE productLine = 'Classic Cars';

--	최근 주문
SELECT * FROM orders
ORDER BY orderDate DESC
LIMIT 10;

--	최소 금액 이상의 결제
SELECT * FROM payments
WHERE amout >= 100;

--조인 쿼리
--	주문과 고객 정보 조합
SELECT o.orderNumber, c.customerName
FROM orders o
JOIN customers c ON o.customerNumber = c.customerNumber;

--	제품과 제품 라인 결합
SELECT p.productName, p.productLine, pl.textDescription
FROM products p
JOIN productlines pl ON p.productLine = pl.productLine;

--	직원과 상사 정보
SELECT e1.employeeNumber, e1.firstName, e1.lastName, e2.firstName AS 'ManagerFirstName', e2.lastName AS 'ManagerLastName'
FROM employees e1
LEFT JOIN employees e2 ON e1.reportsTo = e2.employeeNumber;

--	특정 사무실의 직원 목록
SELECT e.employeeNumber, e.lastName, e.firstName, e.extension, e.email, e.officeCode, e.reportsTo, e.jobTitle
FROM employees e
JOIN offices o ON e.officeCode = o.officeCode
WHERE o.city = 'San Francisco';

--그룹쿼리
--	제품 라인별 제품 수
--	고객별 총 주문 금액
--	가장 많이 팔린 제품
--	매출이 가장 높은 사무실
--서브쿼리
--	특정 금액 이상의 주문
--	평균 이상 결제 고객
--	주문 없는 고객
--	최대 매출 고객
--데이터 수정 및 관리
--	신규 고객 추가
--	제품 가격 변경
--	고객 데이터 업데이트
--	직원 정보

