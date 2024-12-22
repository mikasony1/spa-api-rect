import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function UserDetails({ data }) {
  return (
    <Box sx={{ mb: "20px" }}>
      <Typography>{data.name}</Typography>
      <Typography variant="subtitle2" sx={{ color: "gray" }}>
        Username: {data.username}
      </Typography>
      <Typography variant="subtitle2" sx={{ color: "gray" }}>
        Email: {data.email}
      </Typography>
      <Typography variant="subtitle2" sx={{ color: "gray" }}>
        Phone: {data.phone}
      </Typography>
      <Typography variant="subtitle2" sx={{ color: "gray" }}>
        Site: {data.website}
      </Typography>
    </Box>
  );
}
