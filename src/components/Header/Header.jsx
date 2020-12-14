import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import { getUsers, setUsers } from '../../firebase/api';

function Header() {
  function add() {
    return getUsers();
  }
  const set = () => setUsers();

  return (
    <div className={style.header}>
      <header>
        <button type='button' onClick={add}>
          Get
        </button>
        <button type='button' onClick={set}>
          SET
        </button>
        <NavLink to='/members'>Members</NavLink>
        <NavLink to='/member-progress'>MemberProgress</NavLink>
      </header>
    </div>
  );
}

export default Header;
