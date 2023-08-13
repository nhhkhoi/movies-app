import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DetailModal from "./DetailModal";
import { useAuth } from "../context/AuthContext";
import DetailModalNoToken from "./DetailModalNoToken";
import JobBenefits from "./JobBenefits";

export default function JobCards({ job }) {
  const { token } = useAuth();

  return (
    <Card
      sx={{
        margin: 1,

        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        WebkitBoxShadow: "3px 12px 15px 0px rgba(9,9,8,0.31)",
        BoxShadow: "3px 12px 15px 0px rgba(9,9,8,0.31)",
        backgroundColor: "#2f3640",
        width: "300px",
        height: { md: "300px", sm: "400px" },
      }}
    >
      <CardContent sx={{ marginTop: "10px" }}>
        <Typography
          align="center"
          sx={{
            fontWeight: "bold",
          }}
        >
          {job.title}
        </Typography>
        <hr />
      </CardContent>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography>
          Working Codition: {job.active ? "Active" : ""}
          {job.active & job.remote ? " - " : ""}
          {job.remote ? "Remote" : ""}
        </Typography>
        <Typography>Experience Required: {job.yrsXPExpected} years</Typography>
        <Typography>City: {job.city} </Typography>
      </CardContent>

      <CardContent sx={{ margin: 0.5, padding: 0.5 }}>
        {!!token.username && <DetailModal job={job} key={job.id} />}
        {!token.username && <DetailModalNoToken />}
      </CardContent>
    </Card>
  );
}
