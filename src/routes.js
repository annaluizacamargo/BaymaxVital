import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import GoodScale from "./components/ContainerApp/GoodScale";
import BadScale from "./components/ContainerApp/BadScale";
import App from "./App";

const RoutesProject = () => {
   return(
       <BrowserRouter>
           <Routes>
                <Route element={ <App/> }  path="/" />
                <Route element={ <GoodScale/> }  path="/good-scale" />
                <Route element={ <BadScale/> }  path="/bad-scale" />
           </Routes>
       </BrowserRouter>
   )
}

export default RoutesProject;