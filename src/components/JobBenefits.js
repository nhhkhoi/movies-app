import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";

function JobBenefits({ benefits }) {
  const RedButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700],
    },
  }));

  const trueBenefits = Object.keys(benefits).filter((name) => {
    return benefits[name] === true;
  });

  return (
    <>
      {trueBenefits.map((benefit) => {
        return (
          benefit && (
            <RedButton
              key={benefit}
              sx={{ borderRadius: 2, padding: 0.5, margin: 0.5, fontSize: 8 }}
              component="span"
            >
              {benefit}
            </RedButton>
          )
        );
      })}
    </>
  );
}

export default JobBenefits;
