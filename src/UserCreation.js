import React, { useState } from "react";
import TextFields from "./components/TextFields";

//Notes:
//textfields
//submit button
//validation
////email validation
////password confirmation
////cannot submit empty fields

//information coming from an endpoint, GET request to: https://frontend-take-home.fetchrewards.com/form
////in JSON,      occupation === array of strings["","",...]           states === array of objects with 2 properties [{"name": ..., "abbreviation": "..."}, ...]

//state and occupation, only 1 can be selected
////must be a real state name, abbreviation and full name

const UserCreation = () => {
  //stores all information into 1 state for easy access
  const [userVals, setUserVals] = useState({
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: "",
  });

  return (
    <div>
      <TextFields setUserVals={setUserVals} />
    </div>
  );
};

export default UserCreation;
