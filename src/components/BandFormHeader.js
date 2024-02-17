import { Typography, Grid, Button, Icon } from "@mui/material"
import { format } from 'date-fns'
import PlaceIcon from '@mui/icons-material/Place';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function BandFormHeader({ band, setBand }) {
  const formattedDate = format(new Date(band.date), 'PPPP')

  return (
    <Grid container>
      <Grid item xs={11}>
        <Typography variant="h5" sx={{fontWeight: 700}}>{band.name}</Typography>
      </Grid>
      <Grid item xs={1}>
        <Button variant="outlined" onClick={(e) => {setBand(null)}}>Back</Button>
      </Grid>
      <Grid item xs={12} container>
      <Icon color="primary">
        <CalendarTodayIcon />
      </Icon>
        <Typography>{formattedDate}</Typography>
      </Grid>
      <Grid item xs={12} container>
      <Icon color="primary">
        <PlaceIcon />
      </Icon>
        <Typography>{band.location}</Typography>
      </Grid>
    </Grid>
  );
}

export default BandFormHeader;
