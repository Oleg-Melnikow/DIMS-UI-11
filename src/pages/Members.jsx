import React from 'react';
import { NavLink } from 'react-router-dom';
import Table from '../components/Table/Table';
import { Button } from '../components/Buttons/Button/Button';
import { getUsers } from '../firebase/api';

class Members extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      loading: false,
    };
  }

  componentDidMount() {
    getUsers().then((result) =>
      this.setState(
        {
          users: result,
          loading: true,
        },
        () => console.log(this.state),
      ),
    );
  }

  render() {
    const { users, loading } = this.state;
    return (
      <div>
        <Button>
          <NavLink to='/registration'>Register</NavLink>
        </Button>
        <Table users={users} loading={loading} />
      </div>
    );
  }
}

export default Members;

Members.propTypes = {};
Members.defaultProps = {};
