import React, { useState } from "react";
import Button from "../../components/Button/Button";
import "./BookingForm.css";

const BookingForm = ({
  onFormSubmit,
  isFormSubmitted,
  availableTimes,
  dispatchOnDateChange
}) => {
  const defaultTime = availableTimes[0];  
  const [formValues, setFormValues] = useState({
    date: "",
    time: defaultTime,
    people: "",
    occasion: "",
  });
  const handleInputChange = (e) => {
    if (e.target.name === 'date') {
      dispatchOnDateChange(e.target.value);
    }
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const minimumGuest = 1;
  const maximunGuest = 10;

  return (
    <form onSubmit={(e) => onFormSubmit(e, formValues)}>
      <div className="bookTableForm">
        <label htmlFor="date" className="bookTable-item-title">
          Date
        </label>
        <input type="date" id="date" name="date" onChange={handleInputChange} className={isFormSubmitted && !formValues.date ? "error" : ""}/>
      </div>
      <div className="bookTableForm">
        <label htmlFor="time" className="bookTable-item-title">Time</label>
        <select id="time" name="time" value={formValues.time} onChange={handleInputChange}
          className={isFormSubmitted && !formValues.time ? "error" : ""} >
          {availableTimes.map(time => 
            <option key={time}> {time} </option>
          )}
        </select>
      </div>
      <div className="bookTableForm">
        <label htmlFor="people" className="bookTable-item-title">Number of people </label>
        <input type="number" id="people" name="people" min={minimumGuest} max={maximunGuest} onChange={handleInputChange} className={isFormSubmitted && !formValues.people ? "error" : ""}/>
      </div>
      <div className="bookTableForm">
        <label htmlFor="occasion" className="bookTable-item-title">Occasion</label>
        <select id="occasion" name="occasion" onChange={handleInputChange} className={isFormSubmitted && !formValues.occasion ? "error" : ""}>
          <option value="">Occasion</option>
          <option value="birthday" aria-hidden='true'>Birthday</option>
          <option value="engagement" aria-hidden='true'>Engagement</option>
          <option value="anniversey" aria-hidden='true'>Anniversey</option>
        </select>
      </div>
      <div className="bookTable-button">
        <Button title="Book a table" type="submit" />
      </div>
    </form>
  );
};

export default BookingForm;