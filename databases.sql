create table user
(
user_id INTEGER AUTO_INCREMENT,  -- autoincrement PK, varchar sizes set to reasonable lengths for those fields, to save database space
f_name varchar(50) NOT NULL,
l_name varchar(50),
email varchar(50) NOT NULL,
password varchar(30) NOT NULL,
user_role varchar(30) NOT NULL,
primary key(user_id)
);




insert into user (f_name, l_name, email, password, user_role) values ('Sarraj','Alsersawi','sarraj.alsersawi2@mail.dcu.ie','pass1234', 'admin');
insert into user (f_name, l_name, email, password, user_role) values ('Axel','Boqueho','axel.boqueho2@mail.dcu.ie','pass1234', 'admin');
insert into user (f_name, l_name, email, password, user_role) values ('LiAn','Guo','lian.guo3@mail.dcu.ie','pass1234', 'admin');
insert into user (f_name, l_name, email, password, user_role) values ('William','Mallevays','william.mallevays2@mail.dcu.ie','pass1234', 'admin');
insert into user (f_name, l_name, email, password, user_role) values ('Paul','Petit','paul.petit3@mail.dcu.ie','pass1234', 'admin');
insert into user (f_name, l_name, email, password, user_role) values ('Anoop','Pillai','anoop.remesanpillai2@mail.dcu.ie','pass1234', 'admin');
insert into user (f_name, l_name, email, password, user_role) values ('Andrzej','Zero','andrzej.zero2@mail.dcu.ie ','pass1234', 'admin');


insert into user (f_name, l_name, email, password, user_role) values ('John','Snow','js@gmaol.com','pass1234', 'user');
insert into user (f_name, l_name, email, password, user_role) values ('Tim','Brown','tb@gmail.com ','pass1234', 'user');





create table student_average_age
(
row_id INTEGER AUTO_INCREMENT, 
year INTEGER NOT NULL,
average_age DECIMAL(5,2) NOT NULL,
primary key(row_id)
);


create table air_quality
(
reading_id INTEGER AUTO_INCREMENT, 
pm2_5 DECIMAL(5,2) NOT NULL,
pm10 DECIMAL(5,2) NOT NULL,
temperature DECIMAL(5,2) NOT NULL,
humidity DECIMAL(5,2) NOT NULL,
date DATE NOT NULL,
time TIME NOT NULL,
building varchar(30) NOT NULL,
primary key(reading_id)
);


create table bicycle_travel_time 
(
row_id INTEGER AUTO_INCREMENT, 
age_group varchar(30) NOT NULL,
gender varchar(30) NOT NULL,
year  INTEGER NOT NULL,
value  DECIMAL(5,2) NOT NULL,
primary key(row_id)
);


create table student_study_performance 
(
row_id INTEGER AUTO_INCREMENT, 
gender varchar(30) NOT NULL,
race_ethnicity  varchar(30) NOT NULL,
parental_level_of_education   varchar(30) NOT NULL,
lunch    varchar(30) NOT NULL,
test_preparation_course    varchar(30) NOT NULL,
math_score  INTEGER NOT NULL,
reading_score  INTEGER NOT NULL,
writing_score   INTEGER NOT NULL,
primary key(row_id)
);


create table class_occupancy 
(
row_id INTEGER AUTO_INCREMENT, 
room_number varchar(30) NOT NULL,
number_of_students  INTEGER NOT NULL,
room_type   varchar(30) NOT NULL,
time  TIME NOT NULL,
date DATE NOT NULL,
primary key(row_id)
);








select * from user
select * from student_average_age
select * from air_quality
select * from bicycle_travel_time
select * from student_study_performance
select * from class_occupancy


















