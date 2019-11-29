const EVENTS_UPDATE = 'events: eventsUpdate';

const eventsUpdate = newEvent => ({
  type: EVENTS_UPDATE,
  payload: {
    event: newEvent
  }
});

export default { EVENTS_UPDATE, eventsUpdate };
