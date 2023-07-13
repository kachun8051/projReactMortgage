import React from 'react';
import SliderToolbar from "./SliderToolbar";

const SectionLoan = ({info, setInfo}) => {
  return (
    <>
      <SliderToolbar 
        label="Loan Amount"
        //defaultValue={info.loanAmount} 
        value={info.loanAmount}
        min={500000}
        max={10000000}
        step={10000}
        unit="$"
        suffix={false}
        onChange={
          (e, v) => setInfo({...info, loanAmount: v})
      } 
      />
      <SliderToolbar 
        label="Interest Rate"
        //defaultValue={info.interestRate}         
        value={info.interestRate}
        min={0.25}
        max={40.0}
        step={0.25}
        unit="%" 
        suffix={true}
        onChange={
          (e, v) => setInfo({...info, interestRate: v})
        }
      />
      <SliderToolbar         
        label="Loan Period"
        //defaultValue={info.loanPeriod}         
        value={info.loanPeriod}
        min={5}
        max={30}
        step={1}
        unit="years" 
        suffix={true}
        onChange={
          (e, v) => setInfo({...info, loanPeriod: v})          
        }
      />
    </>
  ) 
}

export default SectionLoan;