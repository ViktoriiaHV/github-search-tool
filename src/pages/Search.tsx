import { Typography } from "@mui/material";

import { useUsersListQuery } from "../services/users";

import styles from "./Search.module.css";
import SearchInput from "../components/Search";

import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import UsersList from "../components/UsersList";

function Search() {
  const query = useSelector((state: RootState) => state.search.query);

  const { data, error, isLoading } = useUsersListQuery({ query, page: 1 });

  console.log(data);

  const fallback = (
    <Typography component="h3" variant="h4" align="center">
      Start typing to search for users
    </Typography>
  );

  return (
    <>
      <SearchInput />
      {query.trim().length >= 3 ? <UsersList query={query} /> : fallback}
    </>
  );
}

export default Search;
