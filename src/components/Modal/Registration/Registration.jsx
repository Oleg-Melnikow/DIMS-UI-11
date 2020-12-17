import React from 'react';
import PropTypes from 'prop-types';
import './Registration.css';
import { NavLink } from 'react-router-dom';
import { Button } from '../../Buttons/Button/Button';

function Registration() {
  return (
    <div className='formWrap'>
      <h2>User name</h2>
      <form>
        <label htmlFor='name'>
          Name <input type='text' id='name' />
        </label>
        <label htmlFor='lastName'>
          Last name <input type='text' id='lastName' />
        </label>
        <label htmlFor='lastName'>
          Direction{' '}
          <select>
            <option>Front end</option>
            <option>Back end</option>
          </select>
        </label>
        <div>
          <button type='button'>Save</button>
          <Button>
            <NavLink to='/members'>Cancel</NavLink>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
