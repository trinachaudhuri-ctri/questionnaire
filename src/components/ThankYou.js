import React from "react";
import { userData } from "../data/data";
import { Box } from "@mui/system";

export default function ThankYou({ resultsArr, score }) {
  console.log(resultsArr)
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{ border: 1 }}
        justifyContent="center"
        alignItems="center"
        minWidth="100vh"
        minHeight="50vh"
      >
        <div style={{ marginLeft: "30%", marginTop: "20%" }}>
          You have successfully submitted the Assessment <br />
          Questions asked: {userData.length} <br />
          Questions Answered: {Object.keys(resultsArr).length} <br />
          Score: {score} <br />
        </div>
      </Box>
    </div>
  );
}
