import "./App.css";

import { useUserDataQuery, useUsersListQuery } from "./services/users";

function App() {

  const { data } = useUserDataQuery("ViktoriiaHV");

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
