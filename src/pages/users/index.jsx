import { useLoaderData } from "react-router-dom";
import List from "@mui/material/List";
import ListItemUrl from "../main/components/ListItemUrl";
import PersonIcon from "@mui/icons-material/Person";

export default function Users() {
  const users = useLoaderData();
  const icon = <PersonIcon sx={{ mr: 0.5 }} fontSize="small" />;

  return (
    <nav>
      <List
        style={{ maxHeight: "100%" }}
        sx={{ width: "100%", bgcolor: "background.paper" }}
        aria-label="contacts"
      >
        {users.map((user) => {
          return (
            <ListItemUrl
              key={user.id}
              text={user.name}
              url={`/users/${user.id}`}
              icon={icon}
            />
          );
        })}
      </List>
    </nav>
  );
}
