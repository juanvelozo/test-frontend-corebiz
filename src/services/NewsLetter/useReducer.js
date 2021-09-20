export const Reducer = (state = {}, action) => {
  switch (action.type) {
    case "mailTrue":
      return {
        ...action.payload,
        auth: true,
      };
    case "mailFalse":
      return {
        auth: false,
      };
    default:
      return state;
  }
};
