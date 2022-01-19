import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./TextFields.css";

const TextFields = (setUserVals) => {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="textFields-container">
      <Form>
        {/*Email Address Textfield */}
        <Form.Group className="basic-textfield" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            isInvalid={false}
          />
          <Form.Text muted>e.g. JohnSmith1@example.com</Form.Text>
        </Form.Group>
        {/*Full Name Textfield */}
        <Form.Group className="basic-textfield" controlId="formFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="fullname"
            placeholder="Enter your full name"
            isInvalid={false}
          />
          <Form.Text muted>e.g. John Smith</Form.Text>
        </Form.Group>

        {/*Password Textfield */}
        <Form.Group className="basic-textfield" controlId="formEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter a password"
            isInvalid={false}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="basic-textfield" controlId="formEmail">
          <Form.Label>Password Confirmation</Form.Label>

          <Form.Control
            type="password"
            placeholder="Re-enter your password"
            isInvalid={false}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        {/*Drop-down Textfields*/}
        {/*Occupation*/}
        <Form.Group className="basic-textfield">
          <Form.Label>Occupation</Form.Label>
          <Form.Select>
            <option>Pick your job</option>
            {/* create options out of .map() of fetch call */}
          </Form.Select>
        </Form.Group>
        {/*State*/}
        <Form.Group className="basic-textfield">
          <Form.Label>State</Form.Label>
          <Form.Select>
            <Form.Label>State</Form.Label>
            <option>Pick your state</option>
            {/* create options out of .map() of fetch call */}
          </Form.Select>
        </Form.Group>
        <Button variant="warning" className="submitBtn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default TextFields;
