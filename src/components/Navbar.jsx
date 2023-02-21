import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { logo } from "../utils/constants";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        backgroundColor: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" className="flex align-items">
        <img src={logo} alt="logo" height={45} />
      </Link>
      <Searchbar />
    </Stack>
  );
};

export default Navbar;
