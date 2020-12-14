import React from 'react';
import './Table.css';
import { Button } from '../Buttons/Button/Button';

function Table() {
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
        <tr>
          <td>1</td>
          <td>Full Name</td>
          <td>Direction</td>
          <td>Education</td>
          <td>Start</td>
          <td>Age</td>
          <td>
            <div>
              <Button>Progress</Button>
              <Button>Tasks</Button>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
