/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Event from '../backend/event';
// import ReactDOM from 'react-dom';
// import './App.css';

function SubmitEvent() {
  const navigate = useNavigate();

  const getToday = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const getNextYearToday = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear() + 1;
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const [date, setDate] = useState(getToday());
  const { register, getValues, handleSubmit } = useForm();
  // eslint-disable-next-line no-unused-vars
  const { onDateChange, onDateBlur, dateName, dateRef } = register('date', {
    onDateChange: event => {
      setDate(event.target.value);
    },
  });
  // const { onTitleChange, onTitleBlur, titleName, titleRef } = register('title');
  // const { onAddressChange, onAddressBlur, addressName, addressRef } = register('address');

  function submit() {
    console.log(getValues());
    const payloadDatetime = getValues('date');
    const payloadTitle = getValues('title');
    const payloadAddress = getValues('address');

    const payload = {
      datetime: payloadDatetime,
      title: payloadTitle,
      address: payloadAddress,
    };

    Event.addEvent(payload).then(navigate('../'));
  }

  return (
    <div>
      <label htmlFor="datetime">
        Event date:
        <input
          {...register('date', {
            onChange: event => {
              setDate(event.target.value);
            },
          })}
          type="datetime-local"
          value={date}
          min={getToday()}
          max={getNextYearToday()}
        />
      </label>
      <br />
      <label htmlFor="title-label">
        Event title:
        <input {...register('title')} type="text" />
      </label>
      <br />
      <label htmlFor="address">
        Address:
        <input {...register('address')} type="text" />
      </label>
      <br />
      <br />
      <button type="button" onClick={handleSubmit(() => submit())}>
        Submit Event
      </button>
    </div>
  );
}

export default SubmitEvent;
