import React from "react";
import backgroundPic from "../assets/NotebookCacti.png";

const Story = () => (
    <div>
     <img
      src={backgroundPic}
      style={{ width: "35%", padding: "35px" }}
      alt="pic of Notebook with Cacti"
    />
    <p
      style={{
        fontSize: "20px",
      }}
    >
      Some More Words or other stuff may go here.
    </p>
   
  </div>
);

export default Story;