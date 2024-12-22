import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "60vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5">404</Typography>
      <Typography variant="h5">Page not found</Typography>
      <Typography sx={{ mt: "7px" }}>
        Go to page: <Link to={"/albums"}>Albums</Link>
      </Typography>
    </Box>
  );
}
