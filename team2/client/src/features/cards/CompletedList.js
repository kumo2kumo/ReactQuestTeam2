import React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core';
// import { CardItem } from './components/CardItem'


const useStyles = makeStyles({
    box: {
        backgroundColor: '#EBECF0',
        height: '50rem',
        borderRadius: '0.5rem',
        boxShadow: '2px 2px 5px 0px'
    }
});


export default function CompletedList() {
    const classes = useStyles();

    return (
        <Grid item xs={5}>
            <Box m={8} className={classes.box} textAlign="center">
                <h3>過去チケット</h3>
                <hr />
                <Box pb={3} pt={3}>
                    {/* <CardItem />
                    <CardItem /> */}
                </Box>
            </Box>
        </Grid>    
    )
}
