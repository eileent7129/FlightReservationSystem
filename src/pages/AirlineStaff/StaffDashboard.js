// import "./StaffDashboard.css";

function StaffDashboard() {
  return (
    <div>
      <h1>Staff Dashboard!</h1>
      <div className="customer-tools">
      <div className="sidebar">
        <h3>My Flights</h3>
        <h3>Flight History</h3>
        <h3>Track My Spending</h3>
      </div>
      <div className="my-display">
        <div class="my-flights">
          <h3>My Flights</h3>
          <div className="flight-ctn">
            <h3>Airline Name</h3>
            <div className="flight-info">
              <p>Flight #000</p>
              <p>Airplane ID: A1</p>
            </div>
            <div className="destination">
              <p>Departure Airport</p>
              <p>Arrival Airport</p>
            </div>
          </div>
          <div className="flight-ctn">
            <h3>Airline Name</h3>
            <div className="flight-info">
              <p>Flight #000</p>
              <p>Airplane ID: A1</p>
            </div>
            <div className="destination">
              <p>Departure Airport</p>
              <p>Arrival Airport</p>
            </div>
          </div>
          <div className="flight-ctn">
            <h3>Airline Name</h3>
            <div className="flight-info">
              <p>Flight #000</p>
              <p>Airplane ID: A1</p>
            </div>
            <div className="destination">
              <p>Departure Airport</p>
              <p>Arrival Airport</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default StaffDashboard;
