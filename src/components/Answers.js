import React from "react";

export default function Answers({ resultsArr }) {
  return (
    <div
      style={{
        position: "absolute",
        left: "10%",
        top: "30%",
        transform: "translate(-50%, -50%)",
      }}
    >
      Review Answers Here.
      {Object.values(resultsArr).map((result, index) => {
        return (
          <div style={{ marginTop: 15 }}>
            #{index + 1}: {result}
          </div>
        );
      })}
    </div>
  );
}
