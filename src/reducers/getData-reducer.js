import {
  GET_DATA_BEGIN,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE
} from '../actions/get-data';

const initialState = {
  data: [],
  loading: false,
  error: null
};

export default function getDataReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload
      };

    case GET_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
        data: []
      };

    default:
      return state;
  }
}
