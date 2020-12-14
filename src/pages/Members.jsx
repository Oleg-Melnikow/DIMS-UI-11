import React from 'react';
import Table from '../components/Table/Table';
import { Button } from '../components/Buttons/Button/Button';
import Registration from '../components/Modal/Registration/Registration';

export class Members extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isModal: false,
    };
  }

  handleClick = () => {
    const { isModal } = this.state;
    this.setState(
      {
        isModal: !isModal,
      },
      () => console.log('Register', this.state),
    );
  };

  des = () => {
    const { isModal } = this.state;
    return isModal;
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>Register</Button>
        <Table />
        {this.des() && <Registration handleClick={this.handleClick} />}
      </div>
    );
  }
}

Members.propTypes = {};
Members.defaultProps = {};
