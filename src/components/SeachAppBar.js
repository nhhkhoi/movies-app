import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { useAuth } from "../context/AuthContext";
import LoginModal from "./LoginModal";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

const SearchAppBar = () => {
  const { token, onLogout, searchParams, onSearch } = useAuth();

  return (
    <Box sx={{}}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: "none", sm: "flex" },

                marginLeft: { xs: 0, sm: 0, md: 10, lg: 20 },
                marginRight: { xs: 0, sm: 0, md: 10, lg: 20 },
              }}
            >
              Job Routing
            </Typography>

            <Search sx={{}}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                inputProps={{ "aria-label": "search" }}
                placeholder="Search Company Name..."
                onChange={onSearch}
                value={searchParams.get("filter") || ""}
              />
            </Search>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginRight: "10px",
              marginLeft: "10px",
            }}
          >
            {!!token.username && (
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                >
                  Welcome, {token.username}
                </Box>
                <Button
                  onClick={onLogout}
                  color="inherit"
                  startIcon={<LoginIcon />}
                >
                  Sign out
                </Button>
              </Box>
            )}

            {!token.username && <LoginModal />}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default SearchAppBar;
