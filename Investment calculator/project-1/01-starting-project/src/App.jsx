import logo from './assets/investment-calculator-logo.png';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { ResultPage } from './components/ResultPage';
import { useState, useEffect } from 'react';
function App() {

  const [result, setResult] = useState('');
  const callback = () => setResult('');


  // useEffect(() => {
  //   console.log(result);
  // }, [result]);
  const calculateHandler = (savings, yearlyContribution, expectedReturns, duration) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = savings; // feel free to change the shape of this input object!
    // const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = expectedReturns / 100;
    // const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      // console.log(yearlyInterest)
      // console.log(currentSavings)
      currentSavings += yearlyInterest + yearlyContribution;
      // console.log(`current saving after adding interest and contribution ${currentSavings}`)
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest.toFixed(2),
        savingsEndOfYear: currentSavings.toFixed(2),
        yearlyContribution: yearlyContribution,
      });
    }
    // console.log(yearlyData)
    setResult(yearlyData)
    // do something with yearlyData ...
  };
  
  return (
    <div>
     <Header/>
     <InputForm calculate={calculateHandler} setResult={setResult}/>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {/* if (result.length == 0) {
          <Result resultArray={result}/>
      } */}
      {result.length > 0 && <ResultPage resultArray={result}/>}
      {/* {console.log(result)} */}
    </div>
  );
}

export default App;
