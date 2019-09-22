import React from 'react'
import {useState} from 'react';
import gql from 'graphql-tag'
import {Mutation} from 'react-apollo'
import {Button} from '@material-ui/core'
import {useStyles } from '../styles/Styles';
import {Grid} from "@material-ui/core";
import { CssTextField } from '../styles/QuoteAdderStyle'
import {Paper} from '@material-ui/core'




const POST_MUTATION=gql`
    mutation PostMutation($text:String!,$author:String!,$book:String!){
        add(text:$text,author:$author,book:$book)
        {
            id,
            text,
            author,
            book
        }
    }
`
export default function AddQuote(props) {
    const classes=useStyles();
const [state,setState]=useState({text:'',author:'',book:'',id:''})
const {text,author,book,id}=state
const changeID=(e)=>{
    setState({...state,id:e.target.value})
}
const changeText=(e)=>{
    
    setState({...state,text:e.target.value})

}
const changeAuthor=(e)=>{
    setState({...state,author:e.target.value})
}
    const changeBook=(e)=>{
        setState({...state,book:e.target.value})
}    
    return (
        <Paper className={classes.body}>      
            <Grid container   >
               <Grid spacing={1} alignItems="center" direction="column" className={classes.list} container>
                <Grid  item >
                    <CssTextField variant="filled" onChange={changeText} multiline label="Text"/>
                </Grid>
                <Grid item >
            <CssTextField variant="filled" onChange={changeAuthor} multiline label="Author"/>
                </Grid>
                
                <Grid item >
            <CssTextField variant="filled" onChange={changeBook} multiline label="Book"/>
                </Grid>
                <Grid item >
            <CssTextField variant="filled" onChange={changeID} multiline label="ID"/>
                </Grid>
            <Grid item >
            <Mutation
             mutation={POST_MUTATION} 
             variables={{text,author,book}}
             onCompleted={() => props.history.push('/')}
             > 
                    {postMutation=> <Button variant="contained" className={classes.root} onClick={()=>{
                    if(text===''&&author===''&&book===''&&id==='')
                    {return}
                     else
                     {return postMutation()}}}>Submit</Button>}
            </Mutation>
            </Grid>
            </Grid>
            </Grid>
      
        </Paper>
    )
}
