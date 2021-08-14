import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons({ convoy, caminoReal, eastlake }) {
  const classes = useStyles();

  const goToConvoy = () => {
    window.open('https://www.google.com/maps/place/Happy+Lemon+Convoy/@32.8247928,-117.1544622,17z/data=!3m1!4b1!4m5!3m4!1s0x80dbffa881bc7e63:0x9a5d5d0574fe1001!8m2!3d32.8246922!4d-117.1544614', '_blank').focus();
  }

  const goToCaminoReal = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=12925%20EL%20CAMINO%20REAL%20SUITE%20AA2%2C%20SAN%20DIEGO%2C%20CA%2092130&query_place_id=').focus();
  }


  const goToEastlake = () => {
    window.open('https://www.google.com/maps/place/2110+Birch+Rd+%23103,+Chula+Vista,+CA+91915/@32.6212003,-116.9622,17z/data=!3m1!4b1!4m5!3m4!1s0x80d9459623b991c1:0x30260ca809544ff6!8m2!3d32.6212003!4d-116.9622', '_blank').focus();
  }



  return (
    <div className={classes.root}>
        {convoy ? (<DirectionButton variant="contained" onClick={goToConvoy}>Get Directions</DirectionButton>) : caminoReal ? (<DirectionButton variant="contained" onClick={goToCaminoReal}>Get Directions</DirectionButton>) : (<DirectionButton variant="contained" onClick={goToEastlake}>Get Directions</DirectionButton>)}
    </div>
  );
}


const DirectionButton = styled(Button)``;