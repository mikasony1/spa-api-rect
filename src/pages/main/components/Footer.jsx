import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

export default function Footer() {
  return (
    <>
      <Divider />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          my: "10px",
        }}
      >
        <Typography sx={{ color: "gray" }}>
          Created by: Drozhyna Valeryia
        </Typography>
        <Typography sx={{ color: "gray" }}>BSU 2024 </Typography>
      </Box>
    </>
  );
}
