import React from "react";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { userData } from "../data/data";

export default function Questions({
  currQuestion,
  selected,
  optionClicked,
  next,
  prev,
  setCurrQuestion,
  setSelected,
  setQuestionId,
  resultsArr,
  handleSubmit,
}) {
  return (
    <div
      style={{
        position: "absolute",
        left: "60%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div>Attempt the questions here.</div>
      <Box
        justifyContent="center"
        alignItems="center"
        minWidth="100vh"
        minHeight="50vh"
      >
        <div style={{ marginTop: "10%" }}>
          {userData[currQuestion]?.text}
          {userData[currQuestion]?.options.map((ans, index) => {
            return (
              <FormGroup key={index}>
                <FormControlLabel
                  label={ans?.text}
                  control={
                    <Checkbox
                      checked={Object.values(resultsArr).includes(ans.text)}
                    />
                  }
                  onClick={() =>
                    optionClicked(
                      ans?.isCorrect,
                      ans?.id,
                      userData[currQuestion]?.id,
                      ans?.text
                    )
                  }
                />
              </FormGroup>
            );
          })}
        </div>
        <>
          <div>
            {prev ? (
              <Button
                variant="contained"
                onClick={() => {
                  if (currQuestion - 1 >= 0) {
                    setCurrQuestion(currQuestion - 1);
                    setSelected(selected);
                    setQuestionId(currQuestion - 1);
                  }
                }}
              >
                Previous
              </Button>
            ) : null}
            {next ? (
              <Button
                variant="contained"
                onClick={() => {
                  if (currQuestion + 1 < userData.length) {
                    setCurrQuestion(currQuestion + 1);
                    setSelected(userData[currQuestion]?.id + 1);
                  } else {
                    alert("Please Submit the test");
                  }
                }}
                style={{ marginLeft: "50%" }}
              >
                Next
              </Button>
            ) : null}
          </div>
        </>
      </Box>
      <Button
        variant="contained"
        onClick={handleSubmit}
        style={{ top: "80%", left: "50%", position: "absolute" }}
      >
        Submit
      </Button>
    </div>
  );
}
