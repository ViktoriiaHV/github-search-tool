import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

import { RootState } from "../store/store";

import SearchInput from "../components/Search";
import UsersList from "../components/UsersList";

function Search() {
  const query = useSelector((state: RootState) => state.search.query);

  const initialScreen = (
    <Typography component="h3" variant="h5" align="center">
      Start typing to search for users
    </Typography>
  );

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
    >
      <Box flex={0}>
        <SearchInput />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        gap={4}
        p='0 2rem'
        flex={1}
        overflow="scroll"
      >
        {query.trim().length >= 3 ? <UsersList query={query} /> : initialScreen}
      </Box>
    </Box>
  );
}

export default Search;
