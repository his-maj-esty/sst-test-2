"use client";

import React, { useState } from "react";

function ClientComponent() {
  const [data, setData] = useState("click me to fetch data");
  const handleClick = async () => {
    const response = await fetch("/api");
    setData(data);
    console.log(response);
  };
  return <button onClick={handleClick}>{data}</button>;
}

export default ClientComponent;
