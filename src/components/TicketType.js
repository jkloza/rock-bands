import React from 'react'
import { Grid, Typography, TextField } from "@mui/material"
import Divider from '@mui/material/Divider';

function TicketType({ ticket, register, setTotal }) {
  // TODO - Handle purchasing in other currencies
  const ticketCostInDollars = ticket.cost / 1000

  function handleTicketQuantityChange(quantity) {
    setTotal((prev) => {
      return {
      ...prev,
      [ticket.type]: quantity * ticketCostInDollars
      }
    })
}

return (
  <Grid container>
    <Grid container item xs={10} rowSpacing={1}>
      <Grid item xs={12}>
        <Typography variant="h6">{ticket.name}</Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="subtitle2">{ticket.description}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">${ticketCostInDollars}</Typography>
      </Grid>
    </Grid>
    <Grid item xs={2}>
      <TextField
        {...register(ticket.type)}
        type="number"
        InputProps={{ inputProps: { min: 0 } }}
        onChange={(e) => handleTicketQuantityChange(e.target.value)} />
    </Grid>
    <Divider sx={{ width: '80%', marginTop: 2, marginBottom: 2 }} />
  </Grid>
);
}


export default TicketType;
