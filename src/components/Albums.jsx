import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemUrl from "../pages/main/components/ListItemUrl";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

export default function Albums({ data }) {
  const icon = <PhotoLibraryIcon sx={{ mr: 0.5 }} fontSize="small" />;
  return (
    <>
      <Typography>Albums</Typography>
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        aria-label="contacts"
      >
        {data.map((album) => {
          return (
            <ListItemUrl
              key={album.id}
              text={album.title}
              url={`/albums/${album.id}`}
              icon={icon}
            />
          );
        })}
      </List>
    </>
  );
}
