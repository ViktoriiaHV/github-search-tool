import { useDispatch, useSelector } from "react-redux";
import {
  MAGIC_RESULTS_PER_PAGE,
  PreviewUser,
  useUsersListQuery,
} from "../services/users";
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
import InfiniteScroll from "react-infinite-scroll-component";
import { nextPage } from "../store/searchSlice";
import { useEffect, useRef } from "react";

function UsersList({ query }: { query: string }) {
  const listRef = useRef<HTMLUListElement>(null);
  const page = useSelector((state: RootState) => state.search.page);
  const dispatch = useDispatch();

  const { data, error, isLoading } = useUsersListQuery({ query, page });

  const handleNextPage = () => {
    dispatch(nextPage());
  };

  const prevQueryRef = useRef(query);
  useEffect(() => {
    if (query !== prevQueryRef.current) {
      prevQueryRef.current = query;
      listRef.current?.scrollTo(0, 0);
    }
  }, [query]);

  if (isLoading || !data?.items) {
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
    <List
      ref={listRef}
      id="scrollableDiv"
      sx={{ height: "100%", width: "100%", overflow: "auto" }}
    >
      <InfiniteScroll
        dataLength={data.items.length}
        next={handleNextPage}
        hasMore={page * MAGIC_RESULTS_PER_PAGE < data?.count}
        loader={<LinearProgress />}
        scrollableTarget="scrollableDiv"
        endMessage={data.items.length > 0 ? "You've seen all results ;)" : 'No results for your search'}
      >
        {data.items.map((el: PreviewUser) => (
          <Link to={el.login} key={el.login}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={el.login} src={el.avatar_url} />
              </ListItemAvatar>
              <ListItemText primary={el.login} />
            </ListItem>
            <Divider variant="fullWidth" />
          </Link>
        ))}
      </InfiniteScroll>
    </List>
  );
}

export default UsersList;
