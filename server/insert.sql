
insert into airline value ("Jet Blue");

insert into customer values("abc123@gmail.com", "Amy Corey", "abc123", 0107181234, 1111122222, "02-01-2030", "United States", "01-02-1999");
insert into customer values("xyz890@gmail.com", "Xi", "xyz890", 0109299876, 2222233333, "02-01-2030", "United States", "01-02-1999");
insert into customer values("cat456@gmail.com", "Cathy", "cat456", 0106469876, 3333344444, "02-01-2030", "United States", "01-02-1999");

insert into airplane values("Jet Blue", "C-141C", 100, "Lockheed", 10);
insert into airplane values("Jet Blue", "C-7A", 200, "Boeing", 15);
insert into airplane values("Jet Blue", "C-47B", 250, "Airbus", 5);

insert into airline_staff values("terryMay", "tm123", "Terry", "May", "12-10-1990", "Jet Blue");

insert into flight values("Jet Blue", 001, 1000, "on-time", "2023-07-01 8PM", "2023-07-02 5AM", "C-141C");
insert into flight values("Jet Blue", 002, 1500, "on-time", "2023-07-05 10PM", "2023-07-06 5AM", "C-141C");
insert into flight values("Jet Blue", 003, 250, "delayed", "2023-07-10 8AM", "2023-07-10 12PM", "C-7A");
insert into flight values("Jet Blue", 004, 1500, "delayed", "2023-07-11 10AM", "2023-07-11 2PM", "C-7A");
insert into flight values("Jet Blue", 005, 600, "on-time", "2023-07-20 1AM", "2023-07-20 8AM", "C-47B");

insert into ticket value("F1234", 001,"Jet Blue");
insert into ticket value("F2345", 002,"Jet Blue");
insert into ticket value("F3456", 003, "Jet Blue");

insert into purchase value("F1234","xyz890@gmail.com", 1000, "2023-06-01 8PM", 0107181234, "2023-07-11 2PM", "Xi");
insert into purchase values("F2345", "abc123@gmail.com", 1000, "2023-06-01 8PM", 0106469876, "2023-07-11 2PM", "Amy Corey");


    -- ticket_id varchar(5),
    -- customer_email varchar(20),
    -- sold_price numeric(5),
    -- purchase_date_time varchar(15),
    -- credit_number numeric(12),
    -- exp_date varchar(15),
    -- name_on_card varchar(20),

    -- primary key (ticket_id, customer_email),
    -- foreign key (ticket_id) references ticket(id),
    -- foreign key (customer_email) references customer(email)