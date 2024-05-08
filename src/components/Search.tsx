import { Paper, IconButton, InputBase } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

import { updateQuery } from "../store/searchSlice";
import { RootState } from "../store/store";

function SearchInput() {
  const query = useSelector((state: RootState) => state.search.query);
  const dispatch = useDispatch();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(updateQuery(e.target.value));
  }

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search GitHub Users"
        inputProps={{ "aria-label": "search github users" }}
        onChange={handleInputChange}
        value={query}
      />
      <IconButton sx={{ p: "10px" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchInput;
