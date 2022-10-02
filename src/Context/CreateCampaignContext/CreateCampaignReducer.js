export const createCampaignReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_PLATFORM":
      return {
        ...state,
        platform: payload.platform,
      };
    case "SET_LOCATION":
      return {
        ...state,
        location: payload.location,
      };
    case "SET_RADIUS":
      return {
        ...state,
        radius: payload.radius,
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: payload.budget,
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: payload.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: payload.endDate,
      };
    case "SET_NAME_IMG":
      return {
        ...state,
        name: payload.name,
        image: payload.image,
      };
    default:
      return state;
  }
};
