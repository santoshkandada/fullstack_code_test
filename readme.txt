Introduction:

Following project tech stack:

Backend: 
    - Flask for : https://flask.palletsprojects.com/en/2.0.x/installation/
    - Flask used for implementaion of api endpoint and communication with DB.

DB: 
    - PostgresSQL : https://www.postgresql.org/download/linux/ubuntu/
    - psycopg2-binary : library to communication b/w flask and PostgresSQL DB

FrontEnd:
  - Angular 12 for UI  

Below are few help commands

os environment variables :
-------------------------------------------
export FLASK_APP=run.py
export FLASK_ENV=development

python packages installations:
-------------------------------------------
pip install psycopg2-binary
pip install -U flask-cors


DB schema:
-------------------------------------------
create database food_catalogue;

create table location(id serial primary key, name varchar(50) not null, description text);
create table department(id serial primary key, name varchar(50) not null, description text);
create table category(id serial primary key, name varchar(50) not null, description text);
create table subcategory(id serial primary key, name varchar(50) not null, description text);

create table food_catalogue_relationship (id serial primary key,
										  description text,
										  location_id integer references location(id) on delete cascade ,
										  department_id integer references department(id) on delete cascade,
										  category_id integer references category(id) on delete cascade,
										  subcategory_id integer references subcategory(id) on delete cascade
										 );



