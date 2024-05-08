import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";

import { CssBaseline, AppBar, Toolbar, Typography, Paper } from "@mui/material";

function App() {
  return (
    <div className={styles.app}>
      <CssBaseline />
      <AppBar position="fixed" color="default">
        <Toolbar>
          <GitHubIcon sx={{ margin: "1rem" }} />
          <Typography variant="h6" color="inherit" noWrap>
            GitHub Search Tool
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper elevation={3} component="main" className={styles.main}>
        <Outlet />
      </Paper>
    </div>
  );
}

export default App;
