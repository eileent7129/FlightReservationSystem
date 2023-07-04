create table airline (
    name varchar(10),
    primary key (name)
);

create table airplane (
    airline_name varchar(10),
    id varchar(10),
    seats numeric(5),
    company varchar(20),
    age numeric(3),

    primary key (id, airline_name),
    foreign key (airline_name) references airline(name)
);

create table airline_staff (
    username varchar(10),
    password varchar(10),
    fname varchar(15),
    lname varchar(15),
    date_of_birth varchar(20),
    airline_name varchar(10),

    primary key (username),
    foreign key (airline_name) references airline(name)
);

create table staff_phone (
    username varchar(10),
    phone numeric(12),

    primary key (username, phone),
    foreign key (username) references airline_staff(username)
);

create table staff_email (
    username varchar(10),
    email varchar(20),

    primary key (username, email),
    foreign key (username) references airline_staff(username)
);

create table airport (
    name varchar(10),
    city varchar(10),
    country varchar(15),
    type varchar(15),

    primary key (name)
);

create table flight (
    airline_name varchar(10),
    flight_num numeric(3),
    base_price numeric(5),
    status varchar(10),
    departure_date_time varchar(15),
    arrival_date_time varchar(15),
    airplane_id varchar(10),

    primary key (flight_num, airline_name, departure_date_time, arrival_date_time),
    foreign key (airline_name) references airline(name),
    foreign key (airplane_id) references airplane(id)
);

create table departure_flight (
    flight_num numeric(3),
    departure_date_time varchar(15),
    departure_airport varchar(10),

    primary key (flight_num, departure_date_time),
    foreign key (flight_num) references flight(flight_num),
    foreign key (departure_airport) references airport(name)
    
);

create table arrival_flight (
    flight_num numeric(3),
    arrival_date_time varchar(15),
    arrival_airport varchar(10),

    primary key (flight_num, arrival_date_time),
    foreign key (flight_num) references flight(flight_num),
    foreign key (arrival_airport) references airport(name)
);

create table ticket (
    id varchar(5),
    flight_num numeric(3),
    airline_name varchar(10),

    primary key (id),
    foreign key (airline_name) references airline(name)
);

create table customer (
    email varchar(20),
    name varchar(20),
    password varchar(15),
    phone_number numeric(12),
    passport_number numeric(10),
    passport_exp_date varchar(10),
    passport_country varchar(15),
    date_of_birth varchar(15),

    primary key (email)
);

create table customer_address (
    customer_email varchar(20),
    building_number numeric(5),
    street varchar(10),
    city varchar(10),
    state varchar(10),

    primary key (customer_email),
    foreign key (customer_email) references customer(email)

);


create table purchase (
    ticket_id varchar(5),
    customer_email varchar(20),
    sold_price numeric(5),
    purchase_date_time varchar(15),
    credit_number numeric(12),
    exp_date varchar(15),
    name_on_card varchar(20),

    primary key (ticket_id, customer_email),
    foreign key (ticket_id) references ticket(id),
    foreign key (customer_email) references customer(email)
);

create table rate (
    airline_name varchar(10),
    flight_num int(3),
    customer_email varchar(20),
    ratings varchar(10),
    comment varchar(20),

    primary key (airline_name, flight_num),
    foreign key (airline_name) references airline(name),
    foreign key (flight_num) references flight(flight_num),
    foreign key (customer_email) references customer(email)

);

