import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Main>
          <Switch>
            <Route exact path={["/", "/search"]}>
              <Search />
            </Route>
            <Route exact path='/saved'>
              <Saved />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </Main>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
