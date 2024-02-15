import { useState } from "react";
import "./App.css";
import useSWR from "swr";

function App() {
  const [status, setStatus] = useState("");
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };
  const fetcher = (url) =>
    fetch(url, { headers })
      .then((res) => res.json())
      .then((json) => setStatus(json.description));
  const { data, error, isLoading } = useSWR(url, fetcher);
  console.log(data)
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      {status && (
        <p>
          Status : {status}
        </p>
      )}
    </>
  );
}

export default App;
