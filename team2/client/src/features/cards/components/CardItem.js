import React from 'react'
import { Link, Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import AlarmTwoToneIcon from '@material-ui/icons/AlarmTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import AddToQueueTwoToneIcon from '@material-ui/icons/AddToQueueTwoTone';

const useStyles = makeStyles({
    root: {
        fontFamily: ['sans-serif', 'Raleway'],
        width: '90%',
        margin: '0.5rem 0rem 1rem 1.5rem',
        '&:hover': {
            boxShadow: '0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19)'
        }
    },
    icon: {
        marginRight: '0.5rem',
    }
})


export const CardItem = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
            <Typography variant="h5" gutterBottom>
                hi there
            </Typography>
            <Typography color="textSecondary">
                meetingID: 3432423
            </Typography>
            <Typography color="textSecondary">
                <AccountCircleTwoToneIcon 
                fontSize="small" 
                className={classes.icon}
                />
                amam:gemil.com
            </Typography>
            <Typography color="textSecondary">
                <AlarmTwoToneIcon 
                fontSize="small" 
                className={classes.icon}
                />
                17:30
            </Typography>
            <Link href="https://www.google.com" underline="hover">
                <AddToQueueTwoToneIcon
                fontSize="small" 
                className={classes.icon}
                />
                https://www.google.com
            </Link>
            </CardContent>
        </Card>
    )
}

// Title
// URL
// start_time
// owner
// meetingID