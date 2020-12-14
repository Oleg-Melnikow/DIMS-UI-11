import React from 'react';
import PropTypes from 'prop-types';
import './Registration.css';

function Registration({ handleClick }) {
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
          <button type='button' onClick={handleClick}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

Registration.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Registration;
