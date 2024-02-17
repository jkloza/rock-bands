import React from 'react'
import { Typography, Card, CardActionArea, CardContent } from '@mui/material'
import { format } from 'date-fns'



function BandSelect({ band, setBand }) {
  const formattedDate = format(new Date(band.date), 'PPPP')

  return (
    <Card elevation={4} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent onClick={() => setBand(band)}>
          <Typography gutterBottom variant="h5" component="div">
            {band.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {formattedDate}
          </Typography>
          <img alt={`${band.name} band`} src={band.imgUrl} height={200} width={200} />
        </CardContent>
      </CardActionArea>
    </Card>
  )

}

export default BandSelect;
