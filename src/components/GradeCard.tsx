import { useEffect, useState } from "react";

type ScoreTypes = {
  studentTotal: number;
  paperTotal: number;
}

const GradeCard = ({studentTotal, paperTotal}: ScoreTypes) => {

  const [grade, setGrade] = useState<number>(0);
  const [letterGrade, setLetterGrade ] = useState<string>("");
  const [hasPassed, setHasPassed] = useState<boolean>();

 useEffect(() => {

  const displayResults = (score: number, total: number): void=> {
    try{
      const studentGrade = (score/total) * 100;
      console.log("student grade " + studentGrade + "%");
      if(studentGrade !== 0){
        setGrade(studentGrade);

        if (grade > 80){
            setLetterGrade('A');
            setHasPassed(true);
          }
        else if (grade > 60 && grade < 80) {
            setLetterGrade('B');
            setHasPassed(true);
        }  
        else if (grade > 50 && grade < 59) {
            setLetterGrade('C');
            setHasPassed(true);
        } 
        else {
            setLetterGrade('F');
            setHasPassed(false);
        } 
      } 

    } catch (error) {
      console.log(error);
    }
    
  };

  displayResults(studentTotal, paperTotal);

 }, [grade, studentTotal, paperTotal]);

  return (
    <div>
      <h1>GradeCard</h1>
      <section style={ letterGrade !== "" ? {visibility:"visible"}: {visibility:"hidden"}}>
        <p>The student total is {studentTotal}.</p> 
        <p>The paper total is {paperTotal}.</p>
      </section>

      <section style={ letterGrade !== "" ? {visibility:"visible"}: {visibility:"hidden"}}>
        <p>Your grade is "{letterGrade}''.</p>
      </section>

      <section style={ grade > 0 ? {visibility:"visible"}: {visibility:"hidden"}}>
        { hasPassed ? <p>CONGRADULATIONS! You have PASSED the test!</p> : <p>Unfortunately, you have Failed the test! Try again. </p>}
      </section>
    </div>
  );
};

export default GradeCard;