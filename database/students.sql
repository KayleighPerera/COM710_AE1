CREATE DATABASE students;


-- Using this information to be put in PhPmyadmin

CREATE TABLE `student` (
  `name` text NOT NULL,
  `surname` text NOT NULL,
  `mobilenumber` text NOT NULL,  
  `gender` text NOT NULL,  
  `password` text NOT NULL,
  `confirmpassword` text NOT NULL,
  `comment` text);
--
-- Dumping data for table `student`
--

INSERT INTO `student` (`name`, `surname`, `mobilenumber`, `gender`, `password`, `confirmpassword`, `comment`) VALUES
('John', 'Doe', '1234567890', 'Male', 'password123', 'password123', 'No comment'),
('Jane', 'Smith', '0987654321', 'Female', 'qwerty456', 'qwerty456', 'N/A'),
('Amanda', 'Pons', '1122334455', 'Female', 'amanda123', 'amanda123', 'Test entry'),
('Michael', 'Johnson', '6677889900', 'Male', 'michael789', 'michael789', 'Sample comment'),
('Emily', 'Davis', '5566778899', 'Female', 'emily2020', 'emily2020', 'Just a test'),
('Chris', 'Brown', '4455667788', 'Male', 'chris567', 'chris567', 'Testing data'),
('Jessica', 'Williams', '3344556677', 'Female', 'jessica890', 'jessica890', 'N/A'),
('Daniel', 'Miller', '2233445566', 'Male', 'daniel123', 'daniel123', 'Sample data'),
('Laura', 'Garcia', '9988776655', 'Female', 'laura321', 'laura321', 'Comment example'),
('James', 'Martinez', '8877665544', 'Male', 'james654', 'james654', 'Test comment');

--
-- ALTER STATEMENT
--
ALTER TABLE `student`
    ADD UNIQUE (mobilenumber);;

--
-- UPDATE STATEMENT
--
UPDATE student
SET gender='Male'
WHERE name LIKE 'J%';

-- DELETE STATEMENT
DELETE FROM student WHERE surname='Smith';
DELETE FROM student WHERE surname='Williams';
