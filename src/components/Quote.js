import React from 'react'
import {Typography,Grid} from '@material-ui/core'
import {useStyles} from '../styles/Styles';
export default function Quote(props) {
    const classes=useStyles();
    return (
        <Grid xs={5} className={classes.Box}>
     
            <Typography variant="h6">
            {props.quote.text}<br/>
            </Typography >
            <Typography variant="subtitle1"> 
            {props.quote.book}<br/>
            </Typography>
            <Typography style={{color:"grey"}} variant="subtitle2">
            Author-{props.quote.author}<br/>
            </Typography>
        </Grid>
    )
}
