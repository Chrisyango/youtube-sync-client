import React from 'react';
import {connect} from 'react-redux';

import {fetchVideo, changeVideo} from '../../actions/videos';

import '../../styles/youtube.css';

export class Youtube extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchVideo());
  }
  
  render() {
    return (
      <div className="youtube">
        <iframe 
          title="youtube-player"
          width="640" 
          height="390"
          src="https://www.youtube.com/embed/Oq9P0or7rEw?autoplay=1&origin=http://example.com"
          allow="autoplay"
          frameBorder="0"
          allowFullScreen
        >
        </iframe>
        <button onClick={event => {
          event.preventDefault();
          this.props.dispatch(changeVideo('Oq9P0or7rEw'));
        }}>Click me YO</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    videoID: state.videos
});

export default connect(mapStateToProps)(Youtube);