import { useEffect, useState } from 'react'

import './App.css'
import { Octokit } from "octokit";

const octokit = new Octokit({ 
  auth: 'YOUR-TOKEN'
});

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await octokit.request("GET /repos/{owner}/{repo}/issues", {
        owner: "octocat",
        repo: "Spoon-Knife",
      });
      console.log(res);
    }
  }, [])
 return <></>
}

export default App
