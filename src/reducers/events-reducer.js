const eventsReducer = (state = [['...Loading']], { type, payload }) => {
  switch (type) {
    case 'EVENTS_UPDATE':
      return payload;
    default:
      return state;
  }
};

export default eventsReducer;
