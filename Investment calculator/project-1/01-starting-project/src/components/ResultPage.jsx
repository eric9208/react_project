export const ResultPage = (props) => {
  let totalInterest = 0;
  let totalInvested = 0
    return (
        <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        {/* <tbody>
          <tr>
            <td>YEAR NUMBER</td>
            <td>TOTAL SAVINGS END OF YEAR</td>
            <td>INTEREST GAINED IN YEAR</td>
            <td>TOTAL INTEREST GAINED</td>
            <td>TOTAL INVESTED CAPITAL</td>
          </tr>
        </tbody> */}
        <tbody>
        {props.resultArray.map(yearlyResult => {
          // Add the yearly interest to the total interest
          totalInterest += parseFloat(yearlyResult.yearlyInterest);
          if (yearlyResult.year == 1) {
            totalInvested = yearlyResult.savingsEndOfYear - yearlyResult.yearlyInterest
          } else {totalInvested += yearlyResult.yearlyContribution}
          
          return (
            <tr key={yearlyResult.year}>
              <td>{yearlyResult.year}</td>
              <td>{yearlyResult.savingsEndOfYear}</td>
              <td>{yearlyResult.yearlyInterest}</td>
              <td>{totalInterest.toFixed(2)}</td> {/* Display the total interest with 2 decimal points */}
              <td>{totalInvested}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    )

}