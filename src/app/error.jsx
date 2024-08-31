"use client";

import { useEffect } from "react";

function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div>
      <h1>somethings wrong</h1>
      <button onClick={() => reset()}>try again</button>
    </div>
  );
}

export default error;
