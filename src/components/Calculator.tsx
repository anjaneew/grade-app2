import React, { useState, type ChangeEvent } from "react";
import { Alert } from "@mui/material";
import GradeCard from "./GradeCard";


type AlertType = {
    severity: string;
    title: string;
    icon: string;
}

const Calculator = () => {

  //scores of the student
  const [score, setScore] = useState<string>("");
  //score of the paper
  const [totalScore, setTotalScore] = useState<number>(0);
  //calculating the total score of the student
  const [calculatedScore, setCalculatedScore] = useState<number | null>(null);
  const [alertDetails, setAlertDetails] = useState<AlertType>({
    severity: "",
    title: "",
    icon: "false"
  });

  //scores of the student
  const handleScoreChange = (e: ChangeEvent<HTMLInputElement>) => {
    setScore(e.target.value);
    console.log(score);
  }

  //calculating the total score of the student
  const calculateScore = (e: React.FormEvent<HTMLButtonElement>):number => {
    e.preventDefault()
    const markList = score.replace(" ", "").split(",");
    console.log(markList);
    let total = 0;
    markList.map((mark) => {total = Number(mark) + total});
    console.log(total);
    setCalculatedScore(total);
    setScore("");
    console.log(calculatedScore !== null ? ("Success!. Generating the grades shortly...") : "");
    handleAlert(total);
     return total;
  }

  //score of the paper
  const handleTotalScoreChange = (e:ChangeEvent<HTMLInputElement>) => {
    const totalScore = Number(e.target.value);
    setTotalScore(totalScore);
    console.log("The test is out of "+ totalScore);
    return totalScore;
  }

  const handleAlert = (calculatedScore: number) => {
    switch(isNaN(calculatedScore)) {
      case true: 
        setAlertDetails({
          severity: "warning",
          title: "Not a valid number!",
          icon: "false",
        });
        break;
      case false:
        setAlertDetails({
          severity: "success",
          title: "Success!.",
          icon: ""
        });
        break;
      default:
          setAlertDetails({
            severity: "",
            title: "",
            icon: "",
          });
    }
  }

  return (
    <div>
      <section>
      <form>
        <h3></h3>
        <label>
          Enter scores (seperated by ',')
        <br/>
        <input 
          type="text" 
          value={score} 
          onChange={(e) => handleScoreChange(e)}
          name="scoreInput"
          placeholder="enter the test scores"
        /> </label><br/>
        <label htmlFor="totalInput"> enter the total test score
          <br/>
        <input 
          type="number"
          value={totalScore}
          onChange={(e) => handleTotalScoreChange(e)}
          name="totalInput"
          placeholder="enter the total test score"
        /></label> <br/>
        <button type="submit" onClick={(e) => calculateScore(e)}>Submit</button>
        {calculatedScore !== null ? (<Alert security={alertDetails.severity} >{alertDetails.title}</Alert>) : ""}
      </form>
    </section>
        <br/>
      <section>
       {calculatedScore !== null ? (<GradeCard studentTotal={calculatedScore} paperTotal={totalScore}/>) : (<p> Generating the grades shortly...</p>)}
      </section>
        </div>
  );
};

export default Calculator;