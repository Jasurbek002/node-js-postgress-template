create database turksh_db;

create extension pgcrypto;

drop table if exists admins;
create table admins(
   admin_id serial primary key,
   adminname varchar(40) not null,
   password varchar(60) not null,
   created_at timestamp default current_timestamp
);

drop table if exists users;
create table users(
   user_id serial primary key,
   username varchar(40) not null,
   password varchar(60) not null,
   contact varchar(9) not null,
   created_at timestamp default current_timestamp
);


drop table if exists cards;
create table cards(
    card_id serial primary key,
    title varchar(200) not null,
    price decimal(7,2) not null,
    stars int not null,
    created_at timestamp default current_timestamp
);


insert into users(username,password,contact) values ('Jasurbek',crypt('12345678',gen_salt('bf')),'908266777');