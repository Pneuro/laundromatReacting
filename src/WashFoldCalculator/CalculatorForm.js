import React, { useState } from "react";
import bbq from "../components/static/SVGs/barbecue.svg";
function CalculatorForm() {
  const [rate, setRate] = useState(1.29);
  const [pounds, setPounds] = useState(0);

  let cost = pounds * rate;
  return (
    <div className="calc-form">
      <div
        className="calcForm"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          lineHeight: 1.6,
        }}
      >
        <h2>Estimate your drop off cost!</h2>
        <small>Average load size is approximately 7 pounds</small>
        <form>
          <input
            name="pounds"
            className="calc"
            type="text"
            placeholder="Pounds of laundry?"
            onChange={(e) => setPounds(e.target.value)}
          />
          <br></br>
          <label for="rates">Select a rate</label>
          <select
            className="calc"
            type="select"
            name="rates"
            onChange={(e) => setRate(e.target.value)}
          >
            <option value="1.29">Residential($1.29/LB)</option>
            <option value="1.09">Commercial($1.09/LB)</option>
            <option value="1.69">Same-Day($1.69/LB)</option>
          </select>
        </form>
        <p className="cost">{`$${cost.toFixed(2)} before tax.`}</p>
        <div>
          <h3>Our Pricing</h3>
          <p>
            Leave it to us. Time is everything, with family, at work, at a
            barbecue, and laundry will always pile up. Just drop it off and pick
            it up, or even better, we'll pick it up. Just give us a call!
          </p>
        </div>
        <img
          className="bbq"
          src={bbq}
          alt="Forget doing laundry, leave that to the pros"
        />
      </div>
    </div>
  );
}

export default CalculatorForm;
