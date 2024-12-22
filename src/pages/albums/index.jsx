import { useLoaderData } from "react-router-dom";
import { List } from "@mui/material";
import ListItemUrl from "../main/components/ListItemUrl";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

export default function Albums() {
  const userAlbums = useLoaderData();
  const icon = <PhotoLibraryIcon sx={{ mr: 0.5 }} fontSize="small" />;

  return (
    <List sx={{ maxHeight: "100%", overflow: "auto" }}>
      {userAlbums.map((album) => {
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
  );
}
