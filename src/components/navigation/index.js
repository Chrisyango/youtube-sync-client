import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import '../../styles/navigation.css';

export class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        currentUser: this.props.currentUser
    }
  }

  render() {
    return (
      <nav className="navigation">
        <Link to='/'>Home</Link>
        <div className="login-register">
          <Link to='/login'>Login</Link>
          <Link to='/register'>Sign Up</Link>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    loggedIn: currentUser !== null,
    currentUser: currentUser
  }
};

export default connect(mapStateToProps)(Navigation);