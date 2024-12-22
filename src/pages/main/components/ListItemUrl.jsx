import * as React from "react";
import { Link } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function ListItemUrl({ text, url, icon }) {
  return (
    <Link to={url} style={{ color: "black", textDecoration: "none" }}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ minWidth: "30px" }}>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
}
