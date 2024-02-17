import { Grid } from "@mui/material"

function BandFormDescription({ band }) {

  return (
      <Grid item sm={12} md={5} sx={{ marginTop: 3 }}>
        <Grid container justifyContent="center" rowSpacing={3}>
          <Grid item md={10} sm={6}>
            <img alt="band" src={band.imgUrl} height={300} width={300} />
          </Grid>
          <Grid item xs={11}>
            <div dangerouslySetInnerHTML={{ __html: band.description_blurb }} />
          </Grid>
        </Grid>
      </Grid>
     
  );
}

export default BandFormDescription;
