import React from 'react'
import Quote from './Quote';
import gql from 'graphql-tag'
import {Query} from 'react-apollo'
const FETCH_QUERY=gql`
{
fetchQuotes{
    quotes{
        book,
        text,
        id,
        author
    }
}
}
`
const NEW_QUOTES_SUBSCRIPTION=gql`
subscription{
    newQuote{
        id,
        book,
        text,
        author
        SubmittedBy{
            id,
            name
        }
    }
}
`
const _subscribeToNewQuotes=subscribeToMore=>{
    subscribeToMore({  
        document:NEW_QUOTES_SUBSCRIPTION,
        updateQuery: (prev, { subscriptionData})=>{
            if (!subscriptionData.data) return prev
            const newQuote=subscriptionData.data.newQuote;
            const exists=prev.fetchQuotes.quotes.find(({id})=>id===newQuote.id)
            if(exists ) return prev;
            
            return Object.assign({},prev,{
                fetchQuotes:{
                    quotes:[newQuote,...prev.fetchQuotes.quotes],
                    count:prev.fetchQuotes.quotes.length+1,
                    __typename:prev.fetchQuotes.__typename
                }
            })
    }
    })

}
export default function QuoteList() {
    return (
            <Query query={FETCH_QUERY}>
            {({loading,error,data,subscribeToMore})=>{
                if(loading){return <div>Fetching</div>}
                if(error){return <div>Error</div>}
                _subscribeToNewQuotes(subscribeToMore)
                const quotesToRender=data.fetchQuotes.quotes
                return(
                <div>  
                 
                 {console.log(quotesToRender)}  
                {quotesToRender.map(quote=><Quote key={quote.id} quote={quote}/>)}
                </div>
                )
                }}
            </Query>
        
    )
}
