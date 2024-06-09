"use client";

import React, { useEffect, useState } from "react";
import Grid from "../../_components/Grid";


function fetchScans(setdata: React.Dispatch<React.SetStateAction<never[]>>, setisLoading: React.Dispatch<React.SetStateAction<boolean>>) {
  fetch("/api/v1/scans", {
    method: "POST",
    body: JSON.stringify({
      limit: 0,
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
}

function PendingScans(props: any) {
  useEffect(() => {

    fetchScans(props.setdata, props.setisLoading);

  }, []);

  return <Grid data={props.data} isLoading={props.isLoading} />;
}

export default PendingScans;
export {fetchScans }