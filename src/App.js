import React, { useState } from 'react'
import skaBand from "./band-json/ska-band.json";
import kpopBand from "./band-json/kpop-band.json";
import punkBand from "./band-json/punk-band.json";
import BandForm from "./BandForm";
import BandSelect from './components/BandSelect';
import { Typography, Grid } from '@mui/material';

function App() {
  const [band, setBand] = useState(null)
  const bands = [skaBand, kpopBand, punkBand];
  return (
    <div className="App">
      <Grid container spacing={2}>
        {band === null ? (
          <>
          <Grid item xs={12}>
            <Typography variant="h6">Select a band to purchase tickets!</Typography>
          </Grid>
            {bands.map((band) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <BandSelect key={band.id} band={band} setBand={setBand} />
                </Grid>
              )
            })}
          </>
        ) : (
          <BandForm band={band} setBand={setBand} />
        )}
      </Grid>
    </div>
  );
}

export default App;
