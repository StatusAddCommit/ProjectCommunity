import EVENTS_UPDATE from '../actions/events-update';

export default (state = [], { type, payload }) => {
  switch (type) {
    case EVENTS_UPDATE:
      return payload.event;
    default:
      return state;
  }
};

// export default eventsReducer;
