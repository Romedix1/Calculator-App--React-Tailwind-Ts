import React from "react";

let operationChoosed = false;

export default function keys(props: {firstNumber: number | undefined, secondNumber: number | undefined, operation: String, setFirstNumber: Function, setSecondNumber: Function, setOperation: Function}) {
    const buttons = [
        "7", "8", "9", "DEL",
        "4", "5", "6", "+",
        "1", "2", "3", "-",
        ".", "0", "/", "x",
        "RESET", "="
    ];


    function handleButtonClick(button: string) {
        if (["+", "-", "/", "x"].includes(button)) {
            props.setOperation(button);
            operationChoosed = true;

            if(operationChoosed === true) {
                calculate();
            }

            return;
        }

        if(button === "RESET") {
            props.setFirstNumber();
            props.setSecondNumber();
            props.setOperation("");
            operationChoosed = false;
            return;
        }

        if(button === "=") {
            props.setOperation("");
            operationChoosed = false;
            calculate();
        }
        
        if (button === "DEL") {
            if (props.secondNumber !== undefined && props.secondNumber.toString() !== "") {
                props.setSecondNumber((prev: number | string) => prev.toString().slice(0, -1));
            } else if (props.operation !== "") {
                props.setOperation("");
                operationChoosed = false;
            } else if (props.firstNumber !== undefined && props.firstNumber.toString() !== "") {
                props.setFirstNumber((prev: number | string) => prev.toString().slice(0, -1));
            }
        }
    
        if (operationChoosed === false && !["+", "-", "/", "x", "RESET", "=", "DEL"].includes(button)) {
            if (button === "." && props.firstNumber?.toString().includes(".")) {
                return;
            }

            if (button === "." && (props.firstNumber === undefined || props.firstNumber.toString() === "")) {
                props.setFirstNumber("0.");
                return;
            }
    
            props.setFirstNumber((prev: number | string) => prev !== undefined ? prev + button : button);
        } else if(operationChoosed === true && !["+", "-", "/", "x", "RESET", "=", "DEL"].includes(button)) {
            if (button === "." && props.secondNumber?.toString().includes(".")) {
                return;
            }

            if (button === "." && (props.secondNumber === undefined || props.secondNumber.toString() === "")) {
                props.setSecondNumber("0.");
                return;
            }
    
            props.setSecondNumber((prev: number | string) => prev !== undefined ? prev + button : button);
        }

    }

    function calculate() {
        if (props.firstNumber !== undefined && props.secondNumber !== undefined) {
            let result;
            switch (props.operation) {
                case "+":
                    result = Number(props.firstNumber) + Number(props.secondNumber);
                    break;
                case "-":
                    result = Number(props.firstNumber) - Number(props.secondNumber);
                    break;
                case "/":
                    result = Number(props.firstNumber) / Number(props.secondNumber);
                    break;
                case "x":
                    result = Number(props.firstNumber) * Number(props.secondNumber);
                    break;
                default:
                    return;
            }
            props.setFirstNumber(result);
            props.setSecondNumber();
        }
    }

    return (
        <section className="keys--container     grid grid-cols-4 gap-3 mt-12 px-4 py-4 rounded-2xl">
            {buttons.map((button, index) => (
                <button onClick={() => handleButtonClick(button)} key={index} className={`keys--button w-full py-3 rounded-lg flex justify-center items-center ${(button === "RESET" || button === "=") && "col-span-2"} ${(button === "RESET" || button === "DEL") ? "keys--key_remove text-xl" : "text-2xl"} ${(button === "=") && "keys--key_result"}`}>
                    {button}
                </button>
                ))
            }
        </section>
    )
}