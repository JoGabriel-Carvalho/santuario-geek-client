import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
// import Shop from "./pages/Shop";

const App = () => {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/registro" exact component={Authentication}/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App;