"use client";
import Grid from "../../_components/Grid";
import React, { useEffect } from "react";
import { useState } from "react";

function RecentScans() {
  const [isLoading, setisLoading] = useState(true);
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("/api/v1/scans", {
      method: "POST",
      body: JSON.stringify({
        limit: 5,
        request: "scanId scanStatus scanType url",
        sort: 1,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setdata(data);
        setisLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return <Grid data={data} isLoading={isLoading} />;
}

export default RecentScans;
