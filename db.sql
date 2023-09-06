create table books (
	id serial,
	book_name varchar(255) not null,
	author varchar(100) not null,
	publisher varchar(100) not null,
	created_at timestamp not null default NOW(),
	updated_at timestamp,
	constraint pk primary key(id)
);

alter table books
--alter column publisher drop not null;
--add column price int not null default 0;
--alter column price drop default;

insert into books (book_name, author, publisher)
values ('Personal Branding Bisa Mengubah Takdir', 'Tom Liwafa', 'Gramedia'),
('Home Sweet Loan','Almira Bastari','Gramedia'),
('Black Showman Dan Pembunuhan Di Kota Tak Bernama','Keigo Higashino','Gramedia');

select * from books;

update books set book_name = 'The Inheritance Games' where id = 2;

delete from books where id = 3;

--select distinct on (b.author) b.id as "No.", b.book_name as "Judul Buku", 
select b.id as "No.", b.book_name as "Judul Buku", 
b.author as "Penulis", b.publisher as "Penerbit", b.price as "Harga" 
from books b
--order by "Penulis" desc, "Judul Buku" desc;
--where b.price >= 30000 and b.price <= 50000;
--limit 3 offset 2;
--offset 3 fetch first 3 rows only;
where b.author ilike '%lynn%';

select distinct author from books;

-- buat table author dan publisher
create table authors (
	id serial,
	author_name varchar(100) not null,
	created_at timestamp not null default NOW(),
	updated_at timestamp,
	constraint pk_authors primary key(id)
);
create table publishers (
	id serial,
	publisher_name varchar(100) not null,
	created_at timestamp not null default NOW(),
	updated_at timestamp,
	constraint pk_publishers primary key(id)
);

-- insert author
insert into authors (author_name)
values ('Jennifer Lynn Barnes'), ('Tom Liwafa'), ('Keigo Higashino'), ('Almira Bastari');

-- insert publisher
insert into publishers (publisher_name)
values ('Gramedia');

select * from authors;
select * from publishers;

-- ubah nama kolom author dan publisher
select * from books;
alter table books
--drop column authors_id;
--drop column publishers_id;
--add column authors_id int not null default 0;
--add column publishers_id int not null default 0;
--add constraint fk_books_authors foreign key (authors_id) references authors(id);
--add constraint fk_books_publishers foreign key (publishers_id) references publishers(id);
add column promo_id int not null default 0;

select b.id as "No.", b.book_name as "Judul Buku", 
a.author_name as "Penulis", pb.publisher_name as "Penerbit", b.price as "Harga", pr.promo_name as "Promosi"
from books b
join authors a on b.authors_id = a.id
join publishers pb on b.publishers_id = pb.id
full join promos pr on b.promo_id = pr.id
order by a.author_name asc;

insert into authors (author_name)
values ('Danang Priyadi');

insert into publishers (publisher_name)
values ('Grasindo');

insert into books (book_name, authors_id, publishers_id, price)
values ('77 Cara Bodoh Berjualan', 5, 2, 25000);

create table promos (
	id serial,
	promo_name varchar(100) not null unique,
	discount_type text check(discount_type in ('flat', 'percent')),
	flat_amount int not null,
	percent_amount float check(percent_amount < 1),
	created_at timestamp not null default NOW(),
	updated_at timestamp
);
