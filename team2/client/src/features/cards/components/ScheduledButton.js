import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { Box, makeStyles, Fab, IconButton, Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    // TODO しっかり配置していない
    // box: {
    //     position: 'relative',
    //     top: theme.spacing(80),
    // },
    fab: {
        marginLeft: theme.spacing(7),
    },
}));

export default function ScheduledButton() {
    const classes = useStyles();

    return (
        <Box textAlign="center">
            <Tooltip title="チケット作成" aria-label="add">
                <Fab color="secondary" >
                <AddIcon />
                </Fab>
            </Tooltip>
            <Tooltip title="チケット消去">
                <IconButton aria-label="delete"  className={classes.fab}>
                <DeleteIcon  color="primary" fontSize="large"  />
                </IconButton>
            </Tooltip>
        </Box>
    );
}
