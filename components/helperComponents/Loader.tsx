import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <div>
      <div className="loader">
        <CircularProgress color="secondary" />
      </div>
    </div>
  );
};

export default Loader;
