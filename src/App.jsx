import Header from "./Components/Header.jsx";
import UserInput from "./Components/UserInput.jsx";
import Result from "./Components/Result.jsx";
import { useState } from "react";



function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1200,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10,
  })
  const isValid = userInput.duration >= 1
  function HandleChange(identifier, newvalue) {
    setUserInput((prevInputs) => {
      return {
        ...prevInputs,
        [identifier]: +newvalue
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userinput={userInput} onchange={HandleChange} />

      {!isValid && (<p className="center">Please enter duration greater than 0</p>)}

      {isValid && <Result input={userInput} />}

    </>
  )
}

export default App;