export default (state = [], { type, payload }) => {
  switch (type) {
    case 'TEMPLATE_ACTION':
      // replace me
      return payload;
    default:
      return state;
  }
};

// export default projectsReducer;
