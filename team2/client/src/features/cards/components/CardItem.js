import React, { useEffect } from 'react'
import { Link, Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import AlarmTwoToneIcon from '@material-ui/icons/AlarmTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import AddToQueueTwoToneIcon from '@material-ui/icons/AddToQueueTwoTone';

const useStyles = makeStyles({
    root: {
        fontFamily: ['sans-serif', 'Raleway'],
        width: '90%',
        borderRadius: '1rem',
        // TODO 色目的に合わせて変えられたらいい https://codepen.io/suez/pen/eNwwGp
        borderLeft: '8px solid #F7AA17',
        margin: '0.5rem auto',
        '&:hover': {
            boxShadow: '0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19)',
        }
    },
    icon: {
        marginRight: '0.5rem',
    },
})


export const CardItem = () => {
    const classes = useStyles();
    
    //自動立ち上げ機能
    useEffect(() => {
        const start_time = new Date("2021-02-18T08:50:00Z");
        let is_started = false;

        const autoJoinTimer = setInterval(() => {
            const dt = new Date();
            console.log(dt);
            if (dt.getMonth() === start_time.getMonth() &&
                dt.getDate() === start_time.getDate() &&
                dt.getHours() === start_time.getHours() &&
                dt.getMinutes() === start_time.getMinutes()
            ) {
                window.open("https://ja.reactjs.org/docs/state-and-lifecycle.html");//URL入れる
                is_started = true;
                clearInterval(autoJoinTimer);
            }
            console.log('func; ' + is_started);
        }, 60 * 1000);
        return () => {
            clearInterval(autoJoinTimer);
        }
        // TODO URL, time入れ込み
    }, [/* url or timeが変わった場合*/]);

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography
                variant="h5"
                gutterBottom 
                style={{borderBottom: '1px solid #000'}}>
                    hi there
                </Typography>
                <Typography color="textSecondary">
                    meetingID: <span style={{fontWeight: 'bolder'}}>3432423</span>
                </Typography>
                <Typography color="textSecondary">
                    <AccountCircleTwoToneIcon 
                    fontSize="small" 
                    className={classes.icon}
                    />
                    owner
                    <span style={{fontWeight: 'bolder', marginLeft: '1rem'}}>amer@gemil.com  </span>
                </Typography>
                <Typography color="textSecondary">
                    <AlarmTwoToneIcon 
                    fontSize="small" 
                    className={classes.icon}
                    />
                    <span style={{fontWeight: 'bolder'}}> 17:30</span>
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
