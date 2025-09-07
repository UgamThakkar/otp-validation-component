import { useEffect, useRef, useState } from 'react';
import './index.css';


const DIGITS_COUNT = 6;

function App() {

  const [inputArr, setInputArr] = useState(new Array(DIGITS_COUNT).fill(""))
  const inputRef = useRef([]);

  useEffect(()=>{
      //helps to focus on the first input box when the page loads.
      inputRef.current[0]?.focus();
  },[]);

  const handleChange = (value, index) => {
    if (isNaN(value)) return; //ensures that input wont take anything else apart from numbers.
    const newValue = value.trim();
    const newArr = [...inputArr]; //we cannot update the array directly coz we need the reference of the previous array so we pass/spread that array into a new array and update the value of the input array based on that
    newArr[index] = newValue.slice(-1); //gets the last digit of the input value if the user types "1" then types "2" then instead of "12" just takes the last digit that is "2"
    setInputArr(newArr);
    newValue && inputRef.current[index+1]?.focus(); //this will only focus on the next input box if we have a actual value in the current input box.
  }

  const handleBackspace = (e, index) =>{
    if(!e.target.value && e.key === "Backspace"){ //this function checks if the key pressed is backspace -> if it is then we first delete the value in current inputbox and then when we press backspace again then 
                                                  // it moves to the previous input box and deletes the value from there.
      inputRef.current[index-1]?.focus();
    }
  }

  return (
    <div className="App">
      <h1>Validate OTP</h1>
      {inputArr.map((digit, index) => {
        return <input 
        ref={(element) => (inputRef.current[index] = element)} 
        className="otp-input" 
        key={index} 
        type='text' 
        value={inputArr[index]} 
        onChange={(e) => handleChange(e.target.value, index)} 
        onKeyDown={(e)=>handleBackspace(e, index)}/>
      })}
    </div>
  );
}

export default App;
