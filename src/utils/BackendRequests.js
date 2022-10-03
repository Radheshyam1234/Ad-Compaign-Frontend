import axios from "axios";
import { API_URL } from "./ApiUrl";

export const getCampaignList = async (campaignListDispatch) => {
  try {
    const {
      data: { response },
    } = await axios({
      method: "GET",
      url: `${API_URL}/campaign`,
    });

    campaignListDispatch({ type: "SET_CAMPAIGN_LIST", payload: response });
  } catch (error) {
    console.log(error);
  }
};

export const addNewCampaign = async (data, campaignListDispatch) => {
  try {
    const {
      data: { response },
    } = await axios({
      method: "POST",
      url: `${API_URL}/campaign`,
      data: data,
    });

    campaignListDispatch({ type: "ADD_NEW_CAMPAIGN", payload: response });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCampaign = async (data, campaignListDispatch) => {
  try {
    const {
      data: { response },
    } = await axios({
      method: "DELETE",
      url: `${API_URL}/campaign`,
      data: data,
    });

    campaignListDispatch({ type: "DELETE_CAMPAIGN", payload: response });
  } catch (error) {
    console.log(error);
  }
};
