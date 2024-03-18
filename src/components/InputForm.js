import React, { useState } from 'react';

const InputForm = () => {
    const [nameValue, setNameValue] = useState('');
    const [ageValue, setAgeValue] = useState(0);
    const [nameFormData, setNameFormData] = useState('');
    const [ageFormData, setAgeFormData] = useState();

    const handleNameChange = (event) => {
        //const {value} = event.target;
        setNameValue(event.target.value);
        setAgeValue(event.target.value);
        //console.log(event);
    }
    console.log(nameValue);

    const handleAgeChanges = (event) => {
        setAgeValue(event.target.value);//this function changes the age values
    }
    console.log(ageValue);

    const handleSubmit = (e) => {
        //alert(`You have entered : ${nameValue}, ${ageValue}`);
        e.preventDefault();
        setNameFormData(nameValue);
        setAgeFormData(ageValue);
        console.log(nameValue);
        console.log(ageValue);
    }
    console.log("Submitted value", nameFormData);
    console.log(ageFormData);
//To do onSubmit show the name and age in the ui
//Write the comment for all the functions
//onSubmit store the name and age in local storage and get data from the local storage and show in ui
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>Name:
        <input type='text' name='name' value={nameValue} onChange={handleNameChange}/>
        </label>
        <label>Age:
            <input type='number' name='age' value={ageValue} onChange={handleAgeChanges}/>
        </label>
        <br/>
        <button type='submit'>Submit</button>
    </form>
    <div>{nameFormData}</div>
    <div>{ageFormData}</div>
    </>
  )
}

export default InputForm;