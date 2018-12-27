import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_VIDEOS_REQUEST = 'FETCH_VIDEOS_REQUEST'; 
export const fetchVideosRequest = () => ({
  type: FETCH_VIDEOS_REQUEST,
});

export const FETCH_VIDEOS_SUCCESS = 'FETCH_VIDEOS_SUCCESS'; 
export const fetchVideosSuccess = video => ({
  type: FETCH_VIDEOS_SUCCESS,
  video
});

export const FETCH_VIDEOS_ERROR = 'FETCH_VIDEOS_ERROR'; 
export const fetchVideosError = error => ({
  type: FETCH_VIDEOS_ERROR,
  error
});

export const fetchVideo = video => dispatch => {
  dispatch(fetchVideosRequest());
  return fetch(`${API_BASE_URL}/videos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      return res.json();
    })
    .then(video => {
      dispatch(fetchVideosSuccess(video[0].videoID));
    })
    .catch(err => {dispatch(fetchVideosError(err))});
}

export const changeVideo = (videoID, id = '5c251dab129a5335d066b841') => dispatch => {
  dispatch(fetchVideosRequest());
  return fetch(`${API_BASE_URL}/videos/${id}`, {
    method: 'PUT',
    body: JSON.stringify({videoID}),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  })
    .then(res => {
      return res.json();
    })
    .then(video => {
      dispatch(fetchVideosSuccess(video));
    })
    .catch(err => {dispatch(fetchVideosError(err))});
}