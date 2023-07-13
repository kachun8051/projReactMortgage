import { Container, Grid } from "@mui/material";
import AppHeader from "./components/AppHeader";
import SectionLoan from './components/SectionLoan';
import SectionPayment from './components/SectionPayment';
import { useState } from 'react';

function App() {

  const [data, setData] = useState(
    {
      loanAmount: 5000000,
      loanPeriod: 18,
      interestRate: 20,
    }
  );

  return (
    <div>
      <AppHeader />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5}>
          <Grid item md={6} xs={12}><SectionLoan info={data} setInfo={setData} /></Grid>
          <Grid item md={6} xs={12}><SectionPayment /></Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
