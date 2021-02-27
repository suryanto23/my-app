import React from 'react';
import './App.css';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



import ListProduct  from "./component/ListProduct.js";
import Counter from './component/Counter/Counter.js'

function App() {


  const [number, setnumber] = useState(0)

  function minus () {
    if(number == 0)return
    setnumber(number-1)
  }
  
  function plus () {
    setnumber(number+1)
  }


  return (
    <Router>
        <div className="App App-header">


        <Switch>
          <Route path="/soal-1">
            <ListProduct />
          </Route>
          <Route path="/soal-2">
            <Counter number={number} minus={minus} plus={plus}/>
          </Route>
        </Switch>

          
        
        
       


        </div>
    </Router>
  );
}







export default App;
