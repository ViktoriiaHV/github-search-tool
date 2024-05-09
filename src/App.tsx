import { Outlet } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Container,
} from "@mui/material";

function App() {
  return (
    <Container sx={{ padding: "8rem", maxHeight: "100vh" }}>
      <CssBaseline />
      <AppBar position="fixed" color="default">
        <Toolbar>
          <GitHubIcon sx={{ margin: "1rem" }} />
          <Typography variant="h6" color="inherit" noWrap>
            GitHub Search Tool
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper
        elevation={3}
        component="main"
        sx={{ height: "70vh", padding: "3rem" }}
      >
        <Outlet />
      </Paper>
    </Container>
  );
}

export default App;
