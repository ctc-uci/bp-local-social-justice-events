import React, {useState} from 'react';
import ReactDOM from 'react-dom';
// import './App.css';

function SubmitEvent() {
  const handleSubmit = () => {};

  return (
    <form
      onSubmit={e => {
        handleSubmit(e);
      }}
    >
      <h2> Geeks For Geeks </h2>
      <h3> Sign-up Form </h3>
      <label> Name:
        <input
        type="text"
        value={name}
        required
        onChange={e => {
          handleChange(e);
        }}
      /></label>
      <br />
    </form>
  );
}

export default SubmitEvent;
