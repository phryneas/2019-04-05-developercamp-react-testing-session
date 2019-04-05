import React from "react";
import { TextField } from "@material-ui/core";

export function App(props) {
  const [username, setUsername] = React.useState("");

  const [state, setState] = React.useState("loading");
  React.useEffect(() => {
    const timeout = setTimeout(() => setState("success"), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <h1>It is working!</h1>
      <div>Hello {props.username}!</div>
      <label>
        Your Username:{" "}
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </label>
      <p>state: {state}</p>
    </>
  );
}
