import React, { createContext, useState } from 'react'
import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link } from "react-router-dom";
import Home from "../Home/Home"
import Gallery from "../Gallery/Gallery"
export const photoContext = createContext() 

const NaveBar = () => {

    const [photo, setPhoto] = useState([])
    
    return (
        <Router>

        <div className="nave-bar">

          <Link className="link" to="/Home">
            Home
          </Link>

          <Link className="link" to="/Gallery">
            Gallery
          </Link>

        </div>

        <photoContext.Provider value={[photo, setPhoto]}>
          <Switch>

            <Route path="/Home">
              <Home />
            </Route>

            <Route path="/Gallery">
              <Gallery />
            </Route>

          </Switch>
        </photoContext.Provider>
    </Router>
    )
}

export default NaveBar;
