import React from 'react';
import { Stack, Typography } from "@mui/material";

const SectionPayment = ({ info }) => {

  const { loanAmount, loanPeriod, interestRate } = info;

  function calculateMonthlyPayment(amt, rate, years) {
    const monthlyInterestRate = rate / 100 / 12;
    const numOfPayments = years * 12;
    const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numOfPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numOfPayments) - 1;
    const monthlyPayment = loanAmount * (numerator / denominator);
    return monthlyPayment.toFixed(2);
  }

  const unit = "$"

  const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanPeriod);

  const totalRepayment = (monthlyPayment * loanPeriod * 12).toFixed(2);

  const Interest = (totalRepayment - loanAmount).toFixed(2);

  return (
    <><Stack spacing={3}>
      <Typography variant="h5" textAlign="center">
        Total repayment:
      </Typography>
      <Typography variant="h4" textAlign="center">
        {unit} {totalRepayment}
      </Typography>

      <Typography variant="h5" textAlign="center">
        Monthly repayments:
      </Typography>
      <Typography variant="h4" textAlign="center">
        {unit} {monthlyPayment}
      </Typography>

      <Typography variant="h5" textAlign="center">
        Total interest payable
      </Typography>
      <Typography variant="h4" textAlign="center">
        {unit} {Interest}
      </Typography>
    </Stack>
    </>
  )
}

export default SectionPayment;