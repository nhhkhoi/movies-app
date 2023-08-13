import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import { orange, red } from "@mui/material/colors";
import { useAuth } from "../context/AuthContext.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  outline: 0,
  Height: 500,
};
const RedButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  borderRadius: "10px",
  fontSize: "10px",

  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: red[700],
  },
  margin: "5px",
}));
const OrangeButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[500],
  "&:hover": {
    backgroundColor: orange[700],
  },
}));

export default function DetailModal({ job }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const { companies } = useAuth();
  const a = companies.map((company) => {
    if (company.id === job.id) {
      return company.name;
    }
    return "";
  });
  console.log(a);

  return (
    <>
      <OrangeButton sx={{ mt: 1, mb: 1 }} onClick={handleOpen}>
        Job Details
      </OrangeButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>Skills Required: </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {job.skills.map((skill, index) => {
              return (
                <RedButton key={index} variant="h6" component="h2">
                  {skill}
                </RedButton>
              );
            })}
          </Box>
          <Typography>
            Salary Range: {job.salaryLow}$ - {job.salaryHigh}$
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
