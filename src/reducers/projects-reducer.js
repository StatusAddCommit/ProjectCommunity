const projectsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'PROJECTS_UPDATE':
      return payload;
    default:
      return state;
  }
};

export default projectsReducer;
