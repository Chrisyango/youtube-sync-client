import {
  FETCH_VIDEOS_REQUEST,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_ERROR,
} from '../actions/videos';

const initialState = {
  video: null,
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_VIDEOS_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === FETCH_VIDEOS_SUCCESS) {
    return Object.assign({}, state, {
      video: action.video,
      error: null
    });
  } else if (action.type === FETCH_VIDEOS_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }
  return state;
}