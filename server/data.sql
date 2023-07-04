select airline_name, flight_num
from flight;

select airline_name, flight_num
from flight
where status = "delayed";

select name
from customer, purchase 
where customer.email = purchase.customer_email;

select id
from airplane
where airline_name = "Jet Blue";

select email
from customer;

select base_price
from flight;

select arrival_date_time
from flight;

select phone_number 
from customer;

select name
from customer;