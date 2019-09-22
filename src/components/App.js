import React from 'react';
import AddQuote from './AddQuote';
import QuoteList from './QuoteList';
import Header from './Header';
import { Switch,Route } from 'react-router-dom';
import Login from './Login';
import Search from './Search';
export default function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path="/Search" component={Search}/>
      <Route exact path="/" component={QuoteList}/>
      <Route exact path="/create" component={AddQuote}/>
      <Route exact path="/login" component={Login}/>
      </Switch>
    </div>
  )
}
