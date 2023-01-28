import React, { useEffect, useState } from "react";
import { userData } from "../data/data";
import Questions from "./questions";
import ThankYou from "./ThankYou";
import Answers from "./Answers";

export default function LandingPage() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [next, setNext] = useState(false);
  const [prev, setprev] = useState(false);
  const [questionId, setQuestionId] = useState("");
  const [selected, setSelected] = useState("");
  const [resultsArr, setResultsArr] = useState({});
  const [testOver, setTestOver] = useState(false);

  useEffect(() => {
    if (currQuestion < userData.length) {
      setNext(true);
    }
    if (currQuestion - 1 >= 0) {
      setprev(true);
    }
  }, [currQuestion]);

  const optionClicked = (isCorrect, id, qID, ans) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setSelected(id);
    setQuestionId(qID);
    if (resultsArr[questionId]) {
      let newObject = {
        ...resultsArr,
        [qID]: ans,
      };
      setResultsArr(newObject);
    } else {
      let newObject = {
        ...resultsArr,
        [qID]: ans,
      };
      setResultsArr(newObject);
    }
  };

  const handleSubmit = () => {
    setTestOver(true);
  };
  if (testOver) {
    return <ThankYou resultsArr={resultsArr} score={score} />;
  }
  return (
    <>
      <Answers resultsArr={resultsArr}/>
      <Questions
        currQuestion={currQuestion}
        selected={selected}
        optionClicked={optionClicked}
        next={next}
        prev={prev}
        setResultsArr={setResultsArr}
        setCurrQuestion={setCurrQuestion}
        setSelected={setSelected}
        setQuestionId={setQuestionId}
        resultsArr={resultsArr}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
