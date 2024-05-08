import { Box } from "@mui/material";
import { useUserDataQuery } from "../services/users";
import { useLocation } from "react-router-dom";

function User() {
  const location = useLocation();
  const { pathname} = location;
  const {data, isLoading, error} = useUserDataQuery(pathname);
  console.log({data});
  return <Box>
    {/* {data.name} */}
  </Box>
}

export default User;