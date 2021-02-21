import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AutoJoin } from "../modules/AutoJoin";
import { Link, Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import AlarmTwoToneIcon from '@material-ui/icons/AlarmTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import AddToQueueTwoToneIcon from '@material-ui/icons/AddToQueueTwoTone';
// import axios from 'axios';

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


export const CardItem = (props) => {
    const classes = useStyles();

    const selectCardById = (state, cardId) => {
        return state.cards.cards.find(card => card.id === cardId)
    } 
    const cardContent = useSelector(state => selectCardById(state, props.id))
    const { title, meetingId, owner, url, startTime } = cardContent.data
    const jaStartTime = new Date(startTime).toLocaleString("ja")
    //自動立ち上げ機能
    useEffect(() => {
        AutoJoin(startTime, url)
    }, [url, startTime]);


    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography
                variant="h5"
                gutterBottom 
                style={{borderBottom: '1px solid #000'}}>
                    {title}
                </Typography>
                <Typography color="textSecondary">
                    meetingID:
                    <span style={{ fontWeight: 'bolder', marginLeft: '0.4rem'}}>{meetingId}</span>
                </Typography>
                <Typography color="textSecondary">
                    <AccountCircleTwoToneIcon 
                    fontSize="small" 
                    className={classes.icon}
                    />
                    owner:
                    <span style={{ fontWeight: 'bolder', marginLeft: '0.4rem' }}>{owner}</span>
                </Typography>
                <Typography color="textSecondary">
                    <AlarmTwoToneIcon 
                    fontSize="small" 
                    className={classes.icon}
                    />
                    <span style={{ fontWeight: 'bolder' }}> {jaStartTime}</span>
                </Typography>
                <Link href={url} underline="hover">
                    <AddToQueueTwoToneIcon
                    fontSize="small" 
                    className={classes.icon}
                    />
                    {url.substring(0, 26)}
                </Link>
            </CardContent>
        </Card>
    )
}
