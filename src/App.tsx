import React, { useState } from 'react';
import './App.css';
import Nav from './Components/nav';
import Result from './Components/result';
import Keys from './Components/keys';

function App() {
  const [currentTheme, setCurrentTheme] = useState("first");
  const [firstNumber, setFirstNumber] = useState<number | undefined>();
  const [secondNumber, setSecondNumber] = useState<number | undefined>();
  const [operation, setOperation] = useState("");

  return (
    <main id="container" className={`px-6 py-8 ${currentTheme}-theme h-screen flex justify-center`}>
      <div className='w-full sm:w-2/3 sm:mt-12 md:w-1/2 lg:w-1/3 2xl:w-1/4'>
        <Nav currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
        <Result firstNumber={firstNumber} secondNumber={secondNumber} operation={operation} />
        <Keys firstNumber={firstNumber} secondNumber={secondNumber} operation={operation} setFirstNumber={setFirstNumber} setSecondNumber={setSecondNumber} setOperation={setOperation} />
      </div>

    </main>
  );
}

export default App;
