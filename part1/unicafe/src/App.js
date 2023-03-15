import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticsLine = ({ total, text }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{total}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <thead>
          <tr>
            <th colSpan="2"></th>
          </tr>
        </thead>
        <tbody>
          <StatisticsLine total={good} text="good"></StatisticsLine>
          <StatisticsLine total={neutral} text="neutral"></StatisticsLine>
          <StatisticsLine total={bad} text="bad"></StatisticsLine>
          <StatisticsLine total={all} text="all"></StatisticsLine>
          <StatisticsLine total={average} text="average"></StatisticsLine>
          <StatisticsLine
            total={positive + "%"}
            text="positive"
          ></StatisticsLine>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let all = good + neutral + bad;
  let average = (good * 1 + neutral * 0 + bad * -1) / all;
  let positive = (good / all) * 100;

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        handleClick={() => {
          setGood(good + 1);
        }}
        text="good"
      ></Button>
      <Button
        handleClick={() => {
          setNeutral(neutral + 1);
        }}
        text="neutral"
      ></Button>
      <Button
        handleClick={() => {
          setBad(bad + 1);
        }}
        text="bad"
      ></Button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      ></Statistics>
    </div>
  );
};

export default App;
