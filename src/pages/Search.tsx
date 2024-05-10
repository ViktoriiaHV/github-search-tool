import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

import { RootState } from "../store/store";

import SearchInput from "../components/SearchInput";
import UsersList from "../components/UsersList";
import { updateQuery } from "../store/searchSlice";

function Search() {
  const query = useSelector((state: RootState) => state.search.query);
  const dispatch = useDispatch();

  function handleInputChange(newValue: string) {
    dispatch(updateQuery(newValue));
  }

  const initialScreen = (
    <Typography component="h3" variant="h5" align="center">
      Start typing to search for users
    </Typography>
  );

  return (
    <Box width="100%" height="100%" display="flex">
      <Box flex={0}>
        <SearchInput updateSearchQuery={handleInputChange} query={query} />
      </Box>
      <Box display="flex" alignItems="center" gap={4} p="0 2rem" flex={1}>
        {query.trim().length >= 3 ? <UsersList query={query} /> : initialScreen}
      </Box>
    </Box>
  );
}

export default Search;
