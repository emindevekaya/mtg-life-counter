import React, { useState } from 'react';
import "../css/App.css";

function App() {
  const [player1Total, setPlayer1Total] = useState(20);
  const [player2Total, setPlayer2Total] = useState(20);

  const onPlayer1Minus1 = () => {
    setPlayer1Total((t) => t - 1);
  };

  const onPlayer1Minus5 = () => {
    setPlayer1Total((t) => t - 5);
  };

  const onPlayer1Plus1 = () => {
    setPlayer1Total((t) => t + 1);
  };

  const onPlayer1Plus5 = () => {
    setPlayer1Total((t) => t + 5);
  };

  const onPlayer2Minus1 = () => {
    setPlayer2Total((t) => t - 1);
  };

  const onPlayer2Minus5 = () => {
    setPlayer2Total((t) => t - 5);
  };

  const onPlayer2Plus1 = () => {
    setPlayer2Total((t) => t + 1);
  };

  const onPlayer2Plus5 = () => {
    setPlayer2Total((t) => t + 5);
  };

  return (
    <div>
      <div className="grid">
        <div className={"box1-1"} onClick={onPlayer1Plus1} />
        <div className={"box2-1"} onClick={onPlayer1Plus5} />
        <div className={"box3-1"} onClick={onPlayer2Plus1} />
        <div className={"box4-1"} onClick={onPlayer2Plus5} />
        <div className={"box1-2"} onClick={onPlayer1Minus1} />
        <div className={"box2-2"} onClick={onPlayer1Minus5} />
        <div className={"box3-2"} onClick={onPlayer2Minus1} />
        <div className={"box4-2"} onClick={onPlayer2Minus5} />
        <div className={"text1"}>{player1Total}</div>
        <div className={"text2"}>{player2Total}</div>
      </div>
    </div>
  );
}

export default App;
