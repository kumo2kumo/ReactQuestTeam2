import React from 'react'
import ScheduledButton from './components/ScheduledButton';
import { CardItem } from './components/CardItem'
import { Box, Grid, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    box: {
        backgroundColor: '#EBECF0',
        borderRadius: '0.5rem',
        boxShadow: '2px 2px 5px 0px',
    }
});


export default function ScheduledList() {
    const classes = useStyles();

    return (
        <Grid item xs={5}>
            <Box m={8} className={classes.box}  textAlign="center">
                <h3>ZOOM起動予定</h3>
                <hr />
                <ScheduledButton/>
                    <Box pb={3} pt={3}>
                        <CardItem />
                        <CardItem />
                    </Box>
            </Box>
        </Grid>    
    )
}
