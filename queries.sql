-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT p.ProductName,
c.categoryName
FROM Product as p
Join Category as c ON p.CategoryId = c.ID

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT CompanyName, [Order].Id
FROM [Order]
JOIN Shipper ON Shipper.Id = [Order].ShipVia
WHERE [Order].OrderDate < "2012-08-09"
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT ProductName, Quantity
FROM Product
JOIN OrderDetail on Product.Id = OrderDetail.ProductId
WHERE OrderDetail.OrderId = "10251"

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT CompanyName, LastName as EmployeesLastName, [Order].Id
FROM [Order]
JOIN Employee on Employee.Id = [Order].EmployeeId
JOIN Customer on Customer.Id = [Order].CustomerId