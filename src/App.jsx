import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Home}  from "./Pages/Home";
import Order from "./Pages/Order";
import Success from "./Pages/Success";


export default function App() {
  const [orderData, setOrderData] = useState(null);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}  />
       
        <Route 
          path="/order" 
          render={(props) => <Order {...props} setOrderData={setOrderData} />} 
        />

    
        <Route 
          path="/success" 
          render={(props) => <Success {...props} orderData={orderData}  />} 
        />
      </Switch>
    </BrowserRouter>
  );
}
