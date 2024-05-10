import { useCallback, useEffect, useState } from "react";
import _debounce from "lodash/debounce";

import { Paper, IconButton, InputBase } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

function SearchInput({
  updateSearchQuery,
}: {
  updateSearchQuery: (newValue: string) => void;
}) {
  const [userInput, setUserInput] = useState<string>("");

  const debouncedHandler = useCallback(_debounce(updateSearchQuery, 1000), []);

  useEffect(() => {
    debouncedHandler(userInput);
  }, [userInput, debouncedHandler]);

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search GitHub Users"
        inputProps={{ "aria-label": "search github users" }}
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
      />
      <IconButton sx={{ p: "10px" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchInput;
