// Main page

import { useState } from "react"
import Button from "../../components/Button"
import TextBox from "../../components/TextBox"
import { ButtonContainer } from "./style"

export default function CalculatorPage () {
    
    // hook state
    const [result, setResult] = useState(0) 
    const [currentNumber, setCurrentNumber] = useState('0') 

    const handleButtonClick = (value, type) => {
        if(type === 'digits') {
            setCurrentNumber(currentNumber+String(value))
        } else if (type === 'operators') {
            switch(value) {
                case '+': setResult(result+ Number(currentNumber))
                break;
                case '-': setResult(result-Number(currentNumber))
                break;
                case '*': setResult(result*Number(currentNumber))
                break;
                case '/': setResult(result/Number(currentNumber))
                break;
                default: break;
            }
            setCurrentNumber('0')
        }
    }


    return <div>
        <h1>Sample Calculator</h1>
        <> Input: <TextBox value={currentNumber}/></>
        <> Result: <TextBox value={result}/></>
        <div style={ButtonContainer}>{(Array.from(Array(10)).map((el, index) => {
            return <Button onHandleClick={(value, type) => handleButtonClick(value, type)} name={index} type='digits' />
        }))}</div>
        <div style={ButtonContainer}>{(["=", "+", "-", "*", "/"]).map((el) => {
            return <Button onHandleClick={(value, type) => handleButtonClick(value, type)} name={el} type='operators' />
        })}</div>
    </div>
}