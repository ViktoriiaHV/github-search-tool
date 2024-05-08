import { Paper, IconButton, InputBase } from "@mui/material";
import {Search as SearchIcon } from '@mui/icons-material'

function SearchInput() {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search GitHub Users"
        inputProps={{ "aria-label": "search github users" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchInput;