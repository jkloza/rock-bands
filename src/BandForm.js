import React, { useState } from 'react'
import { Typography, Grid, TextField, Button } from "@mui/material"
import { useForm } from 'react-hook-form'
import BandFormHeader from "./components/BandFormHeader";
import BandFormDescription from "./components/BandFormDescription";
import TicketType from "./components/TicketType";
import FormSubmissionSuccess from './components/FormSubmissionSuccess';
import { calculateTotal, checkCreditCardNumber, cardNumberFormat, cardExpiryFormat } from './utils'

function BandForm({ band, setBand }) {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm()

  const [total, setTotal] = useState({})
  const [success, setSuccess] = useState(false)

  function submitForm(data) {
    console.log('Form submission success!', { formData: data })
    setSuccess(true)
  }

  function handleClose() {
    setSuccess(false)
    setBand(null)
  }

  return (
    <Grid container sx={{margin: 3}}>
      <BandFormHeader band={band} setBand={setBand} />
      <BandFormDescription band={band} />
      <Grid item sm={12} md={7} sx={{ marginTop: 3 }}>
        <form onSubmit={handleSubmit((data) => {
          submitForm(data)
        })}>
          <Grid container rowSpacing={1} columnSpacing={1} sx={{ paddingRight: 3, paddingLeft: 3 }}>
            <Typography variant="h5">Select Tickets</Typography>
            {band.ticketTypes.map((ticket) => {
              return (
                <TicketType key={ticket.type} ticket={ticket} register={register} setTotal={setTotal} />
              )
            })}
            <Grid item xs={12}>
              <Typography component="span" variant="h5">TOTAL </Typography>
              <Typography component="span" variant="h5"> ${calculateTotal(total)}</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                aria-label="First name"
                {...register('firstName', { required: 'First name is required' })}
                fullWidth
                variant="outlined"
                placeholder="First Name"
                error={errors.firstName}
                helperText={errors?.firstName?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                aria-label="Last name"
                {...register('lastName', { required: 'Last name is required' })}
                fullWidth
                variant="outlined"
                placeholder="Last Name"
                error={errors.lastName}
                helperText={errors?.lastName?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                aria-label="Address"
                {...register('address', { required: 'Address is required' })}
                fullWidth variant="outlined"
                placeholder="Address"
                error={errors.address}
                helperText={errors?.address?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Payment Details</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                aria-label="Credit card number"
                {...register('card.number',
                  {
                    required: 'Payment method is required',
                    validate: {
                      validInput: input => checkCreditCardNumber(input) || 'Invalid card number',
                    }
                  })}
                fullWidth
                variant="outlined"
                inputProps={{ maxLength: 19 }}
                onChange={(e) => setValue('card.number', cardNumberFormat(e.target.value))}
                placeholder="0000 0000 0000 0000"
                error={errors.card?.number}
                helperText={errors?.card?.number?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                aria-label="Card exipration"
                {...register('card.month', { required: 'Payment method is required' })}
                fullWidth
                variant="outlined"
                placeholder="MM/YY"
                inputProps={{ maxLength: 5 }}
                onChange={(e) => setValue('card.month', cardExpiryFormat(e.target.value))}
                error={errors.card?.month}
                helperText={errors?.card?.month?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                aria-label="Card CVV"
                {...register('card.cvv', {
                  required: 'Payment method is required',
                }

                )}
                fullWidth
                variant="outlined"
                placeholder="CVV"
                inputProps={{ maxLength: 3 }}
                error={errors.card?.cvv}
                helperText={errors?.card?.cvv?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" fullWidth type="submit">Get Tickets</Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <FormSubmissionSuccess
        open={success}
        handleClose={handleClose}
        message={`Your credit card will be charged a total of $${calculateTotal(total)}.`}
      />
    </Grid >
  );
}

export default BandForm;
