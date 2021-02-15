import React from 'react'
import ScheduledButton from './ScheduledButton';
import { Box, Grid, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    box: {
        backgroundColor: '#EBECF0',
        height: '50rem',
        borderRadius: '0.5rem'
    }
});


export default function ScheduledList() {
    const classes = useStyles();

    return (
        <Grid item xs={4}>
            <Box m={8} className={classes.box}  textAlign="center">
                <h3>ZOOM起動予定</h3>
                <hr />
                <ScheduledButton/>
            </Box>
        </Grid>    
    )
}
