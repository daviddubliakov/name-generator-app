import React, { Fragment, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

import NAMES from '../../mocks/names';
import filtedByGender from "../../utils/filterByGender";
import getPopularNames from '../../utils/getPopularNames';
import getRandomName from '../../utils/getRandomName';
;

const NameResult = () => {
  const [searchParams] = useSearchParams();

  const [randomizedName, setRandomizedName] = useState(null);

  useEffect(() => {
    const currentGender = searchParams.get("gender");
    const genderNames = filtedByGender(NAMES, currentGender);
    const top5PopularNames = getPopularNames(genderNames);
    const randomizedName = getRandomName(top5PopularNames);

    // hack in order to show randomizing proccess
    setTimeout(() => {
      setRandomizedName(randomizedName);
    }, 1200);
  }, [searchParams]);

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
          Name Result
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          We think that this name fits the most...
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        {randomizedName === null ? (
          <Typography
            component="h3"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Loading...
          </Typography>
        ) : (
          <Typography
            component="h3"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            {randomizedName}
          </Typography>
        )}

      </Container>
    </Fragment>
  );
}

export default NameResult;
