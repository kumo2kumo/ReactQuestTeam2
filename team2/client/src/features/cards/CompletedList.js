import React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    box: {
        backgroundColor: '#EBECF0',
        height: '50rem',
        borderRadius: '0.5rem'
    }
});


export default function CompletedList() {
    const classes = useStyles();

    return (
        <Grid item xs={4}>
            <Box m={8} className={classes.box} textAlign="center">
                <h3>過去チケット</h3>
                <hr />
            </Box>
        </Grid>    
    )
}
