export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "FILTER_BY_PLATFORM":
      return {
        ...state,
        byPlatform: payload,
      };
    case "FILTER_BY_STATUS":
      return {
        ...state,
        byStatus: payload,
      };
    case "FILTER_BY_DAYS":
      return {
        ...state,
        byDays: payload,
      };
    default:
      return state;
  }
};
