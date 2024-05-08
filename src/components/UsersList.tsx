import { useSelector } from "react-redux";
import { PreviewUser, useUsersListQuery } from "../services/users";
import { RootState } from "../store/store";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

function UsersList({ query }: { query: string }) {
  const page = useSelector((state: RootState) => state.search.page);

  const { data } = useUsersListQuery({ query, page });
  console.log({ data });
  if (!data || !data.length) {
    return;
  }
  return (
    <div>
      <List>
        {data.map((el: PreviewUser) => (
          <ListItem>
            <Link to={el.login}>
              <ListItemAvatar>
                <Avatar alt={el.login} src={el.avatar_url} />
              </ListItemAvatar>
              <ListItemText primary={el.login} inlist={true} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default UsersList;
