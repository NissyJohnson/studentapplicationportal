import React from "react";
import "./styles-react.css";

const App = () => {
  const Input = (props) => {
    const { id, type, labelText } = props;
    return (
      <label id={id}>
        {labelText}: <input type={type} name="id" required htmlFor={id} />
      </label>
    );
  };
  const RadioInput = (props) => {
    const { id, type, values, labelText } = props;
    return (
      <label id={id}>
        {labelText}: <input name="id" type={type} required htmlFor={id} />
      </label>
    );
  };
  const Button = (props) => {
    const { type, labelText } = props;
    return <button type={type}>{labelText}</button>;
  };

  const onSubmitEventHandler = (e) => {
    e.preventDefault();
    document.getElementById("studentForm").submit();
  };
  return (
    <div>
      <h1>Student Details Application</h1>
      <form
        action="/"
        method="POST"
        onSubmit={onSubmitEventHandler}
        id="studentForm"
      >
        <Input id="name" type="text" labelText="Name" />
        <RadioInput id="gender" type="radio" labelText="Gender" />
        <Input id="age" type="text" labelText="Age" />
        <Input id="email" type="email" labelText="Email" />
        <Input id="dob" type="date" labelText="Date of Birth" />
        <Input id="state" type="text" labelText="State" />
        <Input id="country" type="text" labelText="Country" />
        <Input id="pincode" type="text" labelText="Pincode" />
        <Input id="coursesapplied" type="text" labelText="Courses Applied" />
        <Button type="submit" labelText="Submit" />
      </form>
    </div>
  );
};

export default App;
