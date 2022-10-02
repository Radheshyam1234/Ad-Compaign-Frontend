export const ActiveStepReducer = (state, { type, payload }) => {
  switch (type) {
    case "OPEN_CREATE_CAMPAIGN_CONTAINER":
      return {
        ...state,
        openCreateCampaign: true,
      };
    case "CLOSE_CREATE_CAMPAIGN_CONTAINER":
      return {
        ...state,
        openCreateCampaign: false,
      };

    case "INCREASE_CREATE_CAMPAIGN_ACTIVE_STEP":
      return {
        ...state,
        createCampaignActiveStep: state.createCampaignActiveStep + 1,
      };

    case "INCREASE_CAMPAIGN_SETTING_ACTIVE_STEP":
      return {
        ...state,
        campaignSettingActiveStep: state.campaignSettingActiveStep + 1,
      };

    case "RESET_ACTIVE_STEP":
      return {
        ...state,
        createCampaignActiveStep: 0,
        campaignSettingActiveStep: 0,
        openCreateCampaign: false,
      };
    default:
      return state;
  }
};
