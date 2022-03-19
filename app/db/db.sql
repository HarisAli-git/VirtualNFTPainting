CREATE TABLE account (
	user_id serial PRIMARY KEY,
	username VARCHAR ( 500 ) UNIQUE NOT NULL,
	password VARCHAR ( 500 ) NOT NULL,
	email VARCHAR ( 500 ) UNIQUE NOT NULL,
	name VARCHAR ( 500 ),
	description VARCHAR ( 1000 ),
	created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        last_login TIMESTAMP 
);

CREATE TABLE tag (
	tag_id serial PRIMARY KEY,
	name VARCHAR ( 100 ) UNIQUE NOT NULL
);

insert into tag (name) values ('food');
insert into tag (name) values ('freestyle');
insert into tag (name) values ('tree');