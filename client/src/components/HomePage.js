import React from "react";
import backgroundPic from "../assets/NotebookCacti.png";

const HomePage = () => (
    <span>
     <img
      src={backgroundPic}
      style={{ width: "100%", padding: "35px" }}
      alt="pic of Notebook with Cacti"
    />
    <p
      style={{
        fontSize: "20px",
      }}
    >
        ...And the Plot Thickens...
        Writing Tool
      Click Login/Sign Up to get started.
    </p>
   
  </span>
);

export default HomePage;