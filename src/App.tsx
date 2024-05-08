import { Outlet } from "react-router-dom";
import styles from "./App.module.css";

import { CssBaseline, AppBar, Toolbar, Typography } from "@mui/material";
import Search from "./pages/Search";

function App() {
  return (
    <div className={styles.app}>
      <CssBaseline />
      <AppBar position="absolute" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            GitHub Search Tool
          </Typography>
        </Toolbar>
      </AppBar>
      <Search />
    </div>
  );
}

export default App;
