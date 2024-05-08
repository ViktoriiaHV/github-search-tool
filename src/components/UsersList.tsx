import { useSelector } from "react-redux";
import { PreviewUser, useUsersListQuery } from "../services/users";
import { RootState } from "../store/store";
import {
  Avatar,
  Divider,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function UsersList({ query }: { query: string }) {
  const page = useSelector((state: RootState) => state.search.page);

  const { data, error, isLoading } = useUsersListQuery({ query, page });

  if (isLoading) {
    return <LinearProgress sx={{ width: "100%" }} />;
  }

  if (error) {
    return (
      <Typography component="h3" variant="h4" align="center">
        Oops, something went wrong. Please try again.
      </Typography>
    );
  }

  return (
    <List sx={{ height: "100%", width: '100%' }}>
      {data?.map((el: PreviewUser) => (
        <Link to={el.login}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={el.login} src={el.avatar_url} />
            </ListItemAvatar>
            <ListItemText primary={el.login} />
          </ListItem>
          <Divider variant='fullWidth' />
        </Link>
      ))}
    </List>
  );
}

export default UsersList;
