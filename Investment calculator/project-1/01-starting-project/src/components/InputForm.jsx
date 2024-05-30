import { useState } from "react"

export const InputForm = (props) => {
    const [currentSavings, setCurrentSavings] = useState(0)
    const [yearlyContribution, setYearlyContribution] = useState(0)
    const [expectedReturns, setExpectedReturns] = useState(0)
    const [duration, setDuration] = useState(0)

    const resetHandler = (e) => {
        e.preventDefault()
        setCurrentSavings(0)
        setYearlyContribution(0)
        setExpectedReturns(0)
        setDuration(0)
        props.setResult('')
    }

    const submitHandler = (e) => {
        e.preventDefault()
        props.calculate(parseFloat(currentSavings), parseFloat(yearlyContribution), parseFloat(expectedReturns), parseInt(duration));
    }
    return (
        <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" value={currentSavings} onChange={(e)=>setCurrentSavings(e.target.value)}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" value={yearlyContribution} onChange={(e)=>setYearlyContribution(e.target.value)}/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" value={expectedReturns} onChange={(e)=>setExpectedReturns(e.target.value)}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" value={duration} onChange={(e)=>setDuration(e.target.value)}/>
          </p>
        </div>
        <p className="actions">
          <button type="button" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    )
}