import React from 'react';
import './Table.css';
import PropTypes from 'prop-types';
import { Button } from '../Buttons/Button/Button';
import { deleteUser } from '../../firebase/api';

function Table({ users, loading }) {
  function getDate(date) {
    return new Date(date).toLocaleDateString();
  }

  function deleteUsers(userId) {
    return deleteUser(userId);
  }

  return (
    <table className='border'>
      <thead className='header'>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Direction</th>
          <th>Education</th>
          <th>Start</th>
          <th>Age</th>
          <th>button</th>
        </tr>
      </thead>
      <tbody>
        {loading &&
          users.map((user) => (
            <tr key={user.userId}>
              <td>1</td>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>{user.directionId}</td>
              <td>{user.education}</td>
              <td>{getDate(user.birthDate)}</td>
              <td>Age</td>
              <td>
                <div>
                  <Button>Progress</Button>
                  <Button>Tasks</Button>
                  <Button>Edit</Button>
                  <Button onClick={() => deleteUsers(user.userId)}>Delete</Button>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;

Table.propTypes = {
  users: PropTypes.instanceOf(Array).isRequired,
  loading: PropTypes.bool.isRequired,
};
Table.defaultProps = {};
