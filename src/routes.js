import React, { Component } from "react";
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom";
import {ModalContainer} from "react-router-modal";
import {isAuthenticated} from "./services/auth";
import SignUp from "./pages/signup";
import Signin from "./pages/signin";
import App from "./pages/App";
import "react-router-modal/css/react-router-modal.css";

const PrivateRoute = ({component: Component ,...rest})=>(
 <Route
   {...rest}
   render ={props =>
    isAuthenticated()?(
      < Component {...props}/>
     ):(
         <Redirect to={{pathname: "/", state:{from : props.location}}}/> 
     )}
 />
 

);
const Routes =()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Signin} />
            <Route path="/signup" component={SignUp} />   
            <PrivateRoute path="/app" component={App} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
         </Switch>
         <ModalContainer />
     </BrowserRouter>    
);

export default Routes;