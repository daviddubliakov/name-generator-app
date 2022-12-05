
import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';


const GenderPicker = () => {
  const navigate = useNavigate();

  const handleGenderClick = (gender) => {
    navigate(`/name-result?gender=${gender}`);
  };

  return (
    <Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pick Your Gender
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Quickly pick a gender and generate one of the most popular name quickly.
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end" justifyContent="center">
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
          >
            <Card>
              <CardHeader
                title="Male"
                subheader="Choose the best name for your boy"
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{
                  align: 'center',
                }}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? theme.palette.grey[200]
                      : theme.palette.grey[700],
                }}
              />
              <CardContent>
                <ul>
                  <Typography
                    component="li"
                    variant="subtitle1"
                    align="center"
                  >
                    More than 100+ popular names
                  </Typography>
                  <Typography
                    component="li"
                    variant="subtitle1"
                    align="center"
                  >
                    Modern english names whole over the world
                  </Typography>
                  <Typography
                    component="li"
                    variant="subtitle1"
                    align="center"
                  >
                    Each hour data updates
                  </Typography>
                </ul>
              </CardContent>
              <CardActions>
                <Button fullWidth variant="contained" onClick={() => handleGenderClick('MALE')}>
                  Find Your Name
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
          >
            <Card>
              <CardHeader
                title="Female"
                subheader="Choose the best name for your boy"
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{
                  align: 'center',
                }}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? theme.palette.grey[200]
                      : theme.palette.grey[700],
                }}
              />
              <CardContent>
                <ul>
                  <Typography
                    component="li"
                    variant="subtitle1"
                    align="center"
                  >
                    More than 100+ popular names
                  </Typography>
                  <Typography
                    component="li"
                    variant="subtitle1"
                    align="center"
                  >
                    Modern english names whole over the world
                  </Typography>
                  <Typography
                    component="li"
                    variant="subtitle1"
                    align="center"
                  >
                    Each hour data updates
                  </Typography>
                </ul>
              </CardContent>
              <CardActions>
                <Button fullWidth variant="contained" onClick={() => handleGenderClick('FEMALE')}>
                  Find Your Name
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default GenderPicker;
