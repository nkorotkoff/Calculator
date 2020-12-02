import React from "react";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";

function Calculator() {
  const [firstNumber, setNum] = React.useState("");
  const [secondNumber, setNum2] = React.useState("");
  const [operator, setOperator] = React.useState("");
  const [input, setInput] = React.useState("0");
  React.useEffect(() => {
    changeInput();
  }, [firstNumber, secondNumber, operator]);

  let initialState = {
    numbers: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    operators: [".", "+", "-", "/", "*"],
  };

  const getValue = (target) => {
    if (operator === "") {
      setNum(String(firstNumber + target));
    } else {
      setNum2(String(secondNumber + target));
    }
  };

  const getOperator = (operatr) => {
    if (operator == 0 && operator.length == 0 && operatr!=='.') {
      setOperator(operatr);
    }
    else if(operator == 0 && !firstNumber.includes('.')){
      setNum(String(firstNumber+'.'))
    } 
    else if(!secondNumber.includes('.'))setNum2(String(secondNumber+'.'))
  };

  const changeInput = () => {
    if (operator == "") {
      setInput(firstNumber);
    } else {
      setInput(secondNumber);
    }
  };
  const operation = ()=>{
    switch(operator){
      case '+':setInput(parseFloat(firstNumber)+parseFloat(secondNumber));
      break;
      case '-':setInput(parseFloat(firstNumber)-parseFloat(secondNumber));
      break;
      case '*':setInput(parseFloat(firstNumber)* parseFloat(secondNumber));
      break;
      case '/':setInput(parseFloat(firstNumber)/parseFloat(secondNumber));
      break;

    }
  }

  const Clear =() =>{
    setNum('')
    setNum2('')
    setOperator('')
  }

  return (
    <div>
      <Display changeInput={input} />
      <Keypad
        numbers={initialState.numbers}
        operators={initialState.operators}
        getValue={getValue}
        getOperator={getOperator}
        doOperation = {operation}
        Clear={Clear}
      />
    </div>
  );
}
export default Calculator;
