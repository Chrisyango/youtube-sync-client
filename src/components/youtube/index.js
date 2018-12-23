import React from 'react';
import {connect} from 'react-redux';

import '../../styles/youtube.css';

export class Youtube extends React.Component {
  render() {
    return (
      <div className="youtube">
        <iframe 
          title="youtube-player"
          width="640" 
          height="390"
          src="https://www.youtube.com/embed/Oq9P0or7rEw?autoplay=1&origin=http://example.com"
          allow="autoplay"
          frameborder="0"
          allowFullScreen
        >
        </iframe>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Youtube);