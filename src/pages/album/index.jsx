import { useNavigate, useParams } from "react-router-dom";
import { getAlbum, getPhotos, getUser } from "../../utils/api";
import { useEffect, useState } from "react";
import Circular from "../main/components/Circular";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function Album() {
  const { albumId } = useParams();
  const [albumData, setAlbumData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loadData = async () => {
    setLoading(true);

    try {
      const album = await getAlbum(albumId);
      const user = await getUser(album.userId);
      const photos = await getPhotos(albumId);

      setAlbumData(album);
      setUserData(user);
      setPhotos(photos);
    } catch {
      navigate("/error");
    }

    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [albumId]);

  if (loading) {
    return <Circular />;
  }

  const imgUrl =
    "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=200&h=200&fit=crop&auto=format";

  return (
    <>
      <Typography variant="h6">{albumData.title}</Typography>
      <Box
        sx={{ display: "flex", gap: "10px", alignItems: "center", mb: "20px" }}
      >
        <Typography variant="subtitle2">Created by:</Typography>
        <Link to={`/users/${userData.id}`}>{userData.name}</Link>
      </Box>
      <ImageList sx={{ width: "100%" }} cols={3} gap={8}>
        {photos.map((item) => (
          <ImageListItem key={item.id}>
            <img
              // Ресурс с картинками пидалит и возвражает 504 ошибку
              // src={`${item.url}?w=150&h=150&fit=crop&auto=format`}
              // Поэтому использовала статическую картинку
              src={`${imgUrl}?w=150&h=150&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
