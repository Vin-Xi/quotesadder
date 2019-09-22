import React,{ useState } from 'react'
import Quote from './Quote'
import gql from 'graphql-tag'
import {TextField,Button, Grid} from '@material-ui/core'
import { withApollo } from 'react-apollo';
import {CssTextField} from '../styles/QuoteAdderStyle'
import {useStyles} from '../styles/Styles'
 const FEED_SEARCH_QUERY=gql`
    query feedSearchQuery($filter:String!){
    fetchQuotes(filter:$filter){
        quotes{
            id,
            text,
            author,
            book,
            SubmittedBy{
                name
            }
        }
    }}
 
 `
 const Search=(props)=> {
    const classes=useStyles();
    const [state,setState]=useState({filter:'',Quotes:[]})
    const handleChange=(e)=>{
       setState({...state,filter:e.target.value})
    //    console.log(state.filter)
    }

    const handleSearch=async(e)=>{
        e.preventDefault()
        const { filter } = state
        
        const result=await props.client.query({ 
            query:FEED_SEARCH_QUERY,
            variables:{filter}
        })
        const quotes=result.data.fetchQuotes.quotes
        setState({...state,Quotes:quotes})
    }

    return (
        <div>
            <Grid className={classes.search} container  direction="column">
            <Grid xs={12} item>
            <CssTextField
             placeholder="Search"
             type="text"
             onChange={handleChange}/>
             <Button onClick={handleSearch}>Search</Button>
             </Grid>
            </Grid>
                        {state.Quotes.map((quotes)=>(<Grid item><Quote key={quotes.id} quote={quotes}/></Grid>))}
             
             
        </div>
    )
}
export default withApollo(Search)
