import React, { useState } from 'react';

const genderList = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" }
];

function App() {

  const [gender, setGender] = useState(null);

  const handleChange = e => {
    setGender(e.target.value);
  }

  return (
    <div className="app">
      <h4>Radio Buttons in React - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h4>

      <div className='title'>Select gender from the list</div>
      {genderList.map((x, i) => <label key={i}>
        <input
          type="radio"
          name="gender"
          value={x.value}
          onChange={handleChange}
        /> {x.label}
      </label>)}

      <div>Selected value: {gender}</div>
    </div>
  );
}

export default App;