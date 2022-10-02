export const campaignListReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_CAMPAIGN_LIST":
      //   console.log(...payload);
      return [...payload];

    case "ADD_NEW_CAMPAIGN":
      return [...state, payload];

    case "DELETE_CAMPAIGN":
      return state.filter((data) => data._id !== payload._id);

    default:
      return state;
  }
};
