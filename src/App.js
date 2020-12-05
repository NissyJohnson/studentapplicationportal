import React, { useState } from "react";
import "./styles-react.css";

const App = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    gender: "",
    dob: "",
    state: "",
    country: "",
    pincode: "",
    coursesapplied: "",
  });
  const Input = (props) => {
    const { id, type, labelText } = props;

    return (
      <label id={id}>
        {labelText}:{" "}
        <input
          type={type}
          name={id}
          required
          htmlFor={id}
          value={inputs[id]}
          onBlur={(e) => onblurHandler(e)}
        />
      </label>
    );
  };
  const RadioInput = (props) => {
    const { id, type, values, labelText } = props;
    return (
      <label id={id}>
        {labelText}:{" "}
        {values.map((radio, index) => {
          return (
            <>
              <label className="radioBtn" key={index}>
                <input
                  name={id}
                  type={type}
                  required
                  htmlFor={id}
                  value={radio}
                />
                {radio}
              </label>
            </>
          );
        })}
      </label>
    );
  };
  const Button = (props) => {
    const { type, labelText } = props;
    return <button type={type}>{labelText}</button>;
  };

  const onblurHandler = (e) => {
    const { name, value } = e.target;
    console.log("name", value);
    // setInputs((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
  };

  const onSubmitEventHandler = (e) => {
    e.preventDefault();
    const formData = {};
    const dataArray = document.getElementById("#studentForm label");
    console.log(dataArray);
    // dataArray.forEach((item) => console.log(item.value));
  };
  return (
    <div className="container">
      <h1>Student Details Application</h1>
      <form onSubmit={onSubmitEventHandler} id="studentForm">
        <Input id="name" type="text" labelText="Name" />
        <RadioInput
          id="gender"
          type="radio"
          labelText="Gender"
          name="gender"
          values={["Male", "Female"]}
        />
        <Input id="age" type="text" labelText="Age" />
        <Input id="email" type="email" labelText="Email" />
        <Input id="dob" type="date" labelText="Date of Birth" />
        <Input id="state" type="text" labelText="State" />
        <Input id="country" type="text" labelText="Country" />
        <Input id="pincode" type="number" labelText="Pincode" />
        <Input id="coursesapplied" type="text" labelText="Courses Applied" />
        <Button type="submit" labelText="Submit" />
      </form>
    </div>
  );
};

export default App;
