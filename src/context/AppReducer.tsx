export default (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_DATA':
      return {
        ...state,
        data: action.payload,
      };
    case 'REMOVE_ERROR':
      return {
        ...state,
        error: null,
      };
    case 'ADD_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
