import {
  Box,
  Container,
  Grid,
  IconButton,
  LinearProgress,
  Paper,
  Typography,
} from "@mui/material";
import { useUserDataQuery } from "../services/users";
import { Link, useLocation } from "react-router-dom";
import { ArrowBack, SentimentVeryDissatisfied } from "@mui/icons-material";

function User() {
  const location = useLocation();
  const { pathname } = location;
  const username = pathname.replace("/", "");
  const { data, isLoading, error } = useUserDataQuery(username);
  console.log({ data });
  if (!data) {
    return;
  }
  if (isLoading) {
    return <LinearProgress sx={{ width: "100%" }} />;
  }

  if (error) {
    return (
      <Typography component="h3" variant="h4" align="center">
        Oops, something went wrong. Please try again.
      </Typography>
    );
  }
  return (
    <Container>
      <Paper
        sx={{
          backgroundColor: "#f5f5f5",
          padding: 2,
          marginBottom: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link to={"/"}>
          <IconButton sx={{ marginRight: 2 }}>
            <ArrowBack />
          </IconButton>
        </Link>
        <Typography variant="h5" component="h2">
          {data.name}
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <img
            src={data.avatar_url}
            alt={data.name}
            style={{ width: "100%", height: "auto", borderRadius: "1rem" }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper sx={{ padding: 2 }}>
            <Box display="flex" justifyContent="space-evenly">
              <Paper sx={{ padding: 2, marginBottom: 2 }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    marginBottom: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  Followers: {data.followers}{" "}
                  {data.followers === 0 && <SentimentVeryDissatisfied />}
                </Typography>
              </Paper>
              <Paper sx={{ padding: 2, marginBottom: 2 }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ marginBottom: 1 }}
                >
                  Following: {data.following}
                </Typography>
              </Paper>
            </Box>
            {data.company && <Paper sx={{ padding: 2, marginBottom: 2 }}>
              <Typography variant="h6" component="h3" sx={{ marginBottom: 2 }}>
                Company: {data.company}
              </Typography>
            </Paper>}
            {data.email && (
              <Paper sx={{ padding: 2, marginBottom: 2 }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ marginBottom: 2 }}
                >
                  Email: {data.email}
                </Typography>
              </Paper>
            )}
            {data.blog && (
              <Paper sx={{ padding: 2, marginBottom: 2 }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ marginBottom: 2 }}
                >
                  Blog: {data.blog}
                </Typography>
              </Paper>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default User;
