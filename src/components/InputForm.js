import React, { useState } from 'react';

const InputForm = () => {
    const [nameValue, setNameValue] = useState('');
    const [ageValue, setAgeValue] = useState(0);

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
        console.log(nameValue);
        console.log(ageValue);
    }
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
    <div>{nameValue}</div>
    <div>{ageValue}</div>
    </>
  )
}

export default InputForm;