import React from "react";
import {
  AppBar,
  Button,
  CssBaseline,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";

import { useUserDataQuery, useUsersListQuery } from "../services/users";

import styles from "./Search.module.css";
import SearchInput from "../components/Search";

function Search() {
  const { data } = useUserDataQuery("ViktoriiaHV");

  return (
      <main>
        <Paper>
        <SearchInput />
          <Typography component="h1" variant="h4" align="center">Users</Typography>
          <p>{JSON.stringify(data)}</p>
        </Paper>
      </main>
  );
}

export default Search;
