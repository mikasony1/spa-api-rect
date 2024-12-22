import { useNavigate, useParams } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import Albums from "../../components/Albums";
import { useEffect, useState } from "react";
import { getAlbumsByUser, getUser } from "../../utils/api";
import Circular from "../main/components/Circular";

export default function User() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const getData = async () => {
    setLoading(true);

    try {
      const user = await getUser(userId);
      const albums = await getAlbumsByUser(userId);

      setUser(user);
      setAlbums(albums);
    } catch (err) {
      console.error(err);
      navigate("/error");
    }

    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [userId]);

  if (loading) {
    return <Circular />;
  }

  return (
    <>
      <UserDetails data={user} />
      <Albums data={albums} />
    </>
  );
}
