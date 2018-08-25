import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import '../../styles/landingpage.css';

export class LandingPage extends React.Component {
  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className="landingpage">
        <h2>Hello and welcome to a basic Front-End Template.</h2>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);