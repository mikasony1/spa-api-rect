import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";
import GroupIcon from "@mui/icons-material/Group";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { useEffect } from "react";
import { Navigation } from "@mui/icons-material";

export default function Header() {
  const [activeLocation, setActiveLocation] = useState(useLocation());
  const location = useLocation();

  useEffect(() => {
    setActiveLocation(location);
  }, [location]);

  const activeStyle = { display: "flex", alignItems: "center", color: "black" };
  const inactiveStyle = {
    display: "flex",
    alignItems: "center",
    color: "gray",
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        gap: "30px",
        mt: "10px",
      }}
    >
      <Link
        style={
          activeLocation.pathname === "/albums" ? activeStyle : inactiveStyle
        }
        to="/albums"
      >
        <PhotoLibraryIcon sx={{ mr: 0.5 }} fontSize="small" />
        Albums
      </Link>

      <Link
        style={
          activeLocation.pathname === "/users" ? activeStyle : inactiveStyle
        }
        to="/users"
      >
        <GroupIcon sx={{ mr: 0.5 }} fontSize="small" />
        Users
      </Link>
    </Box>
  );
}
