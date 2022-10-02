import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { Toggle } from "../../Components/Toggle/Toggle";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { deleteCampaign, getCampaignList } from "../../utils/BackendRequests";
import { useCampaignListProvider } from "../../Context/CampaignListContext/CampaignListProvider";
import { DateConverter } from "../../utils/DateConverter";
import { CheckActiveStatus } from "../../utils/CheckActiveStatus";
import { FilteredList } from "./utils/FilteredList";

export const ListContainer = () => {
  const { campaignListState, campaignListDispatch } = useCampaignListProvider();
  useEffect(() => {
    getCampaignList(campaignListDispatch);
    console.log(campaignListState);
  }, []);

  return (
    <div className="lists-container">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="list-heading">
            <TableRow>
              <TableCell style={{ width: 10 }}>
                <Checkbox disabled />
              </TableCell>
              <TableCell align="left" style={{ width: 10 }}>
                On/Off
              </TableCell>
              <TableCell align="left">Campaign</TableCell>
              <TableCell align="left">Date Range</TableCell>
              <TableCell align="left">Clicks</TableCell>
              <TableCell align="left">Budget</TableCell>
              <TableCell align="left">Location</TableCell>
              <TableCell align="left">Platforms</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {FilteredList(campaignListState).length > 0 &&
              FilteredList(campaignListState).map((campaign) => (
                <TableRow
                  key={campaign.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Checkbox />
                  </TableCell>
                  <TableCell align="left">
                    <Toggle />
                  </TableCell>
                  <TableCell>
                    <div className="flex align-center ">
                      <img
                        className="list-item-img"
                        src={campaign.image}
                        alt="Listimage"
                      />
                      <div className="flex flex-column ml-10">
                        <div className="font-bold">{campaign.name}</div>
                        <div className="mt-5">Created On {}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="left" style={{ fontSize: "11px" }}>
                    {DateConverter(campaign.startDate)}-
                    {DateConverter(campaign.endDate)}
                  </TableCell>
                  <TableCell align="left">{campaign.clicks}</TableCell>
                  <TableCell align="left">{campaign.budget}</TableCell>
                  <TableCell align="left">{campaign.location}</TableCell>
                  <TableCell align="left">
                    {(campaign.platform === "FB" && (
                      <FacebookIcon
                        style={{ color: "blue", fontSize: "20px" }}
                      />
                    )) ||
                      (campaign.platform === "Google" && (
                        <GoogleIcon
                          style={{ color: "#DB4437", fontSize: "20px" }}
                        />
                      )) ||
                      (campaign.platform === "Youtube" && (
                        <YouTubeIcon
                          style={{ color: "red", fontSize: "20px" }}
                        />
                      )) ||
                      (campaign.platform === "Instagram" && (
                        <InstagramIcon
                          style={{ color: "#E1306C", fontSize: "20px" }}
                        />
                      ))}
                  </TableCell>
                  <TableCell align="left">
                    {CheckActiveStatus(campaign.startDate, campaign.endDate)}
                  </TableCell>
                  <TableCell align="left">
                    <DeleteOutlinedIcon
                      className="ml-5"
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => {
                        deleteCampaign(campaign, campaignListDispatch);
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
